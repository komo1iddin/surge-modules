var obj = JSON.parse($response.body);

obj= {
  "status" : {
    "message" : "Success",
    "code" : 200
  },
  "payload" : {
    "is_intro_offer" : false,
    "latest_transaction_id" : "",
    "active" : true,
    "is_renewal" : false,
    "expires_at" : 4080580628000,
    "auto_renew_status" : "1",
    "grace_expires_at" : null,
    "product_id" : "pixelup.pro.freetrial.1week.t4",
    "is_in_grace" : true,
    "started_at" : 1681945084000,
    "purchased_product_identifiers" : [
      "pixelup.pro.freetrial.1week.t4"
    ],
    "latest_transaction_time" : 1681945083000,
    "subscription_id" : "1",
    "is_trial" : true,
    "is_family_share" : true
  }
}

$done({body: JSON.stringify(obj)});
