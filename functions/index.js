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
  
    exports.getStakeHolders = functions.https
    .onRequest((request, response) => {
        response.set("Access-Control-Allow-Origin", "*");
        response.set("Access-Control-Allow-Headers", "Content-Type");
        const stakeHolder = request.body;
        var toBeReturned = [];
        if(stakeHolder.id){
          admin
            .firestore()
            .collection("Stake Holder")
            .where("id", "==", stakeHolder.id)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const order = doc.data();
                toBeReturned.push(order);
              });
              response.json(toBeReturned);
            })
            .catch((error) => {
              response.status(500).json({
                error: error.code,
              });
            });
        }
       else if(stakeHolder.type){
          admin
            .firestore()
            .collection("Stake Holder")
            .where("type", "==", stakeHolder.type)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const order = doc.data();
                toBeReturned.push(order);
              });
              response.json(toBeReturned);
            })
            .catch((error) => {
              response.status(500).json({
                error: error.code,
              });
            });
        }
        else{
          admin
            .firestore()
            .collection("Stake Holder")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const order = doc.data();
                toBeReturned.push(order);
              });
              response.json(toBeReturned);
            })
            .catch((error) => {
              response.status(500).json({
                error: error.code,
              });
            });
        }
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

    //   var object={
    //     type="",
    //     id="",
    //     enagement_between=[],
    //     enegements_of=""
    // }
      exports.getEngagement = functions.https
      .onRequest((request, response) => {
          response.set("Access-Control-Allow-Origin", "*");
          response.set("Access-Control-Allow-Headers", "Content-Type");
          var toBeReturned = [];
          const engagement = request.body;
          if(engagement.id){
            admin
              .firestore()
              .collection("Engagement")
              .where("id", "==", engagement.id)
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  const order = doc.data();
                  toBeReturned.push(order);
                });
                response.json(toBeReturned);
              }) 
              .catch((error) => {
                response.status(500).json({
                  error: error.code,
                });
              });
          }
          else if(engagement.type){
            admin
              .firestore()
              .collection("Engagement")
              .where("type", "==", engagement.type)
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  const order = doc.data();
                  toBeReturned.push(order);
                });
                response.json(toBeReturned);
              })
              .catch((error) => {
                response.status(500).json({
                  error: error.code,
                });
              });
          }
        else if(engagement.engagement_with.length == 2){
          admin
              .firestore()
              .collection("Engagement")
              .where("engagement_with", "array-contains", engagement.engagement_with[0])
              .where("engagement_with", "array-contains", engagement.engagement_with[1])
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  const order = doc.data();
                  toBeReturned.push(order);
                });
                response.json(toBeReturned);
              }) 
              .catch((error) => {
                response.status(500).json({
                  error: error.code,
                });
              });
        }
        else if(engagement.engagement_with.length == 3){
          admin
              .firestore()
              .collection("Engagement")
              .where("engagement_with", "array-contains", engagement.engagement_with[0])
              .where("engagement_with", "array-contains", engagement.engagement_with[1])
              .where("engagement_with", "array-contains", engagement.engagement_with[2])
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  const order = doc.data();
                  toBeReturned.push(order);
                });
                response.json(toBeReturned);
              }) 
              .catch((error) => {
                response.status(500).json({
                  error: error.code,
                });
              });
        }
        else if(engagement.engagement_with.length == 4){
          admin
              .firestore()
              .collection("Engagement")
              .where("engagement_with", "array-contains", engagement.engagement_with[0])
              .where("engagement_with", "array-contains", engagement.engagement_with[1])
              .where("engagement_with", "array-contains", engagement.engagement_with[2])
              .where("engagement_with", "array-contains", engagement.engagement_with[3])
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  const order = doc.data();
                  toBeReturned.push(order);
                });
                response.json(toBeReturned);
              }) 
              .catch((error) => {
                response.status(500).json({
                  error: error.code,
                });
              });
        }
        else if(engagement.engagement_of){
          admin
              .firestore()
              .collection("Engagement")
              .where("engagement_with", "array-contains", engagement.engagement_of)
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  const order = doc.data();
                  toBeReturned.push(order);
                });
                response.json(toBeReturned);
              }) 
              .catch((error) => {
                response.status(500).json({
                  error: error.code,
                });
              });
        }
      });

      //Task
      exports.createTask = functions.https.onRequest((request, response) => {
        response.set("Access-Control-Allow-Origin", "*");
        response.set("Access-Control-Allow-Headers", "Content-Type");
        const package = request.body;
        admin
            .firestore()
            .collection("Task")
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
        exports.updateTask = functions.https.onRequest((request, response) => {
          response.set("Access-Control-Allow-Origin", "*");
          response.set("Access-Control-Allow-Headers", "Content-Type");
          const package = request.body;
          admin
              .firestore()
              .collection("Task")
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

        exports.getTask = functions.https
        .onRequest((request, response) => {
          cors(response, request, () => {
            response.set("Access-Control-Allow-Origin", "*");
            response.set("Access-Control-Allow-Headers", "Content-Type");
            admin
                .firestore()
                .collection("Task")
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
      
        
