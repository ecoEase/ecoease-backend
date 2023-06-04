# Welcome to EcoEase API Documentation

Long short story, EcoEase is one of Bangkit 2023 Capstone projects which focuses on a waste issue around us. We try to eliminate this issue by providing an app that can classify garbage type and call "garbage collector" to help the user to cleanup their waste.

## List APi

### **User**

| Usage    | Endpoint                         |
| -------- | -------------------------------- |
| Register | POST http://ecoease.api/register |

### **Mitra**

| Usage    | Endpoint                      |
| -------- | ----------------------------- |
| Register | POST http://ecoease.api/mitra |

### **Garbage** 🔑

| Usage        | Endpoint                          |
| ------------ | --------------------------------- |
| Retrieve All | GET http://ecoease.api/garbage    |
| Add New      | POST http://ecoease.api/garbage   |
| Delete       | DELETE http://ecoease.api/garbage |
| Edit         | PUT http://ecoease.api/garbage    |

### **Location** 🔑

| Usage        | Endpoint                         |
| ------------ | -------------------------------- |
| Add New      | POST http://ecoease.api/location |
| Retrieve All | GET http://ecoease.api/location  |

### **Address** 🔑

| Usage        | Endpoint                              |
| ------------ | ------------------------------------- |
| Add New      | POST http://ecoease.api/address       |
| Retrieve All | GET http://ecoease.api/address        |
| Update       | PUT http://ecoease.api/address/:id    |
| Delete       | DELETE http://ecoease.api/address/:id |

### **Detail Transaction** 🔑

| Usage              | Endpoint                                   |
| ------------------ | ------------------------------------------ |
| Add New Batch Data | POST http://ecoease.api/detail-transaction |
| Retrieve All       | GET http://ecoease.api/detail-transaction  |

### **Order** 🔑

| Usage                                      | Endpoint                                              |
| ------------------------------------------ | ----------------------------------------------------- |
| Add New                                    | POST http://ecoease.api/order                         |
| Retrieve All                               | GET http://ecoease.api/order                          |
| Retrieve All by Id                         | GET http://ecoease.api/order?id=value                 |
| Retrieve All by User Id                    | GET http://ecoease.api/order?userId=value             |
| Retrieve All by Mitra Id                   | GET http://ecoease.api/order?mitraId=value            |
| Add New Order with Detail Transaction      | POST http://ecoease.api/order/with-detail-transaction |
| Pickup Order                               | PUT http://ecoease.api/order/pickup                   |
| Cancel Order                               | PUT http://ecoease.api/order/cancel                   |
| Updata Order Status (ON_PROCESS, FINISHED) | PUT http://ecoease.api/order/update-status            |

nb: 🔑 mean require header authorization in order to use the API endpoints

### OTHER API ENDPOINT WILL UPDATE SOON!
