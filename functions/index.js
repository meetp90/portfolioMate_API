const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.createStakeHolder = functions.https.onRequest((request, response) => {
    response.set("Access-Control-Allow-Origin", "*");
    response.set("Access-Control-Allow-Headers", "Content-Type");
    const package = request.body;
    admin
        .firestore()
        .collection("Stake Holder")
        .doc(package.id).set(package)
        .then( () => {
          response.json(package);
        })
        .catch((error) => {
          response.status(500).json({
            error: error.code,
          });
        });
    });
  
    exports.updateStakeHolder = functions.https.onRequest((request, response) => {
      response.set("Access-Control-Allow-Origin", "*");
      response.set("Access-Control-Allow-Headers", "Content-Type");
      const package = request.body;
      admin
          .firestore()
          .collection("Stake Holder")
          .doc(package.id).update(package)
          .then( () => {
            response.json(package);
          })
          .catch((error) => {
            response.status(500).json({
              error: error.code,
            });
          });
    });
  
    exports.getStakeHolder = functions.https
    .onRequest((request, response) => {
        response.set("Access-Control-Allow-Origin", "*");
        response.set("Access-Control-Allow-Headers", "Content-Type");
        const package = request.body;
        admin
            .firestore()
            .collection("Stake Holder")
            .get(package.id)
            .then((querySnapshot) => {
              const orders = [];
              querySnapshot.forEach((doc) => {
                const order = doc.data();
                orders.push(order);
              });
              response.json(orders);
            })
            .catch((error) => {
              response.status(500).json({
                error: error.code,
              });
            });
    });

    exports.getAllStakeHolder = functions.https
    .onRequest((request, response) => {
      cors(response, request, () => {
        response.set("Access-Control-Allow-Origin", "*");
        response.set("Access-Control-Allow-Headers", "Content-Type");
        const package = request.body;
        admin
            .firestore()
            .collection("Stake Holder")
            .get()
            .then((querySnapshot) => {
              const orders = [];
              querySnapshot.forEach((doc) => {
                const order = doc.data();
                orders.push(order);
              });
              response.json(orders);
            })
            .catch((error) => {
              response.status(500).json({
                error: error.code,
              });
            });
      });
    });

    exports.startEngagement = functions.https.onRequest((request, response) => {
      response.set("Access-Control-Allow-Origin", "*");
      response.set("Access-Control-Allow-Headers", "Content-Type");
      const package = request.body;
      admin
          .firestore()
          .collection("Engagement")
          .doc(package.id).set(package)
          .then( () => {
            response.json(package);
          })
          .catch((error) => {
            response.status(500).json({
              error: error.code,
            });
          });
      });
      
      exports.updateEngagement = functions.https.onRequest((request, response) => {
        response.set("Access-Control-Allow-Origin", "*");
        response.set("Access-Control-Allow-Headers", "Content-Type");
        const package = request.body;
        admin
            .firestore()
            .collection("Engagement")
            .doc(package.id).update(package)
            .then( () => {
              response.json(package);
            })
            .catch((error) => {
              response.status(500).json({
                error: error.code,
              });
            });
      });

      exports.getEngagementByStakeHolders = functions.https
      .onRequest((request, response) => {
          response.set("Access-Control-Allow-Origin", "*");
          response.set("Access-Control-Allow-Headers", "Content-Type");
          const stakeHolder = request.body;
          admin
              .firestore()
              .collection("Engagement")
              .where("stakeHolderFrom","==",stakeHolder.stakeHolderFrom)
              .where("stakeHolderFor","==",stakeHolder.stakeHolderFor)
              .get()
              .then((querySnapshot) => {
                const orders = [];
                querySnapshot.forEach((doc) => {
                  const order = doc.data();
                  orders.push(order);
                });
                response.json(orders);
              })
              .catch((error) => {
                response.status(500).json({
                  error: error.code,
                });
              });
      });

      exports.getEngagementById = functions.https
      .onRequest((request, response) => {
          response.set("Access-Control-Allow-Origin", "*");
          response.set("Access-Control-Allow-Headers", "Content-Type");
          const stakeHolder = request.body;
          admin
              .firestore()
              .collection("Engagement")
              .where("id","==",stakeHolder.id)
              .get()
              .then((querySnapshot) => {
                const orders = [];
                querySnapshot.forEach((doc) => {
                  const order = doc.data();
                  orders.push(order);
                });
                response.json(orders);
              })
              .catch((error) => {
                response.status(500).json({
                  error: error.code,
                });
              });
      });

      exports.getEngagementByType = functions.https
      .onRequest((request, response) => {
          response.set("Access-Control-Allow-Origin", "*");
          response.set("Access-Control-Allow-Headers", "Content-Type");
          const stakeHolder = request.body;
          admin
              .firestore()
              .collection("Engagement")
              .where("type","==",stakeHolder.type)
              .get()
              .then((querySnapshot) => {
                const orders = [];
                querySnapshot.forEach((doc) => {
                  const order = doc.data();
                  orders.push(order);
                });
                response.json(orders);
              })
              .catch((error) => {
                response.status(500).json({
                  error: error.code,
                });
              });
      });
