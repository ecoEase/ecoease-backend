# Welcome to EcoEase API Documentation

Long short story, EcoEase is one of Bangkit 2023 Capstone projects which focuses on a waste issue around us. We try to eliminate this issue by providing an app that can classify garbage type and call "garbage collector" to help the user to cleanup their waste.

## List APi

### **User**

| Usage    | Endpoint                         |
| -------- | -------------------------------- |
| Register | POST http://ecoease.api/register |

### **Example**

**parameters**

| Parameter    | Required | Deskripsi               |
| ------------ | -------- | ----------------------- |
| firstName    | Yes      | Nama depan pengguna     |
| lastName     | Yes      | Nama belakang pengguna  |
| email        | Yes      | Alamat email pengguna   |
| address      | Yes      | Alamat lengkap pengguna |
| photoFile    | No       | File foto pengguna      |
| phone_number | Yes      | Nomor telepon pengguna  |

**result**

```json
{
  "message": "Registration successful",
  "data": {
    "id": "522b6362-28bc-42c0-be5d-e0028941d033",
    "firstName": "johan",
    "lastName": "hoho",
    "email": "wth@gmail.com",
    "password": "$2b$10$OgqfrK.5nMWab1ALH5jPr.mZ0i39lWn5OlZyoXJlSH0LtdGR.oHdy",
    "url_photo_profile": null,
    "phone_number": "001245",
    "updatedAt": "2023-06-13T14:38:21.828Z",
    "createdAt": "2023-06-13T14:38:21.828Z"
  }
}
```

### **Login User**

| Usage    | Endpoint                      |
| -------- | ----------------------------- |
| Register | POST http://ecoease.api/login |

### **Example**

**parameters**

| Parameter | Required | Deskripsi                   |
| --------- | -------- | --------------------------- |
| email     | Yes      | Email pengguna terdaftar    |
| password  | Yes      | Password pengguna terdaftar |

**result**

```json
{
  "message": "Login sukses",
  "data": {
    "id": "test-user",
    "firstName": "user-1",
    "lastName": "lastname-1",
    "email": "user1@email.com",
    "password": "$2b$10$CxaAauzEdRZ/uaj4i7QrqeyEkUbtzVuHQMTSnPnTyUpih6vHVNoLO",
    "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230604214141-avatar new.png",
    "phone_number": "081230812312",
    "fcm_token": "fzRpiJEiRKmnKJ25vx2L1n:APA91bFro73d6n_jjuDgUT_SsgXFW7cYYmO0X5LhYTSbL6sFQNo-XVIF6SnLouvkF-oE07S4xWHxovfvwumldJL2Pdo04iG_ov5bkqljkKiynmcBtTLa_LXA1ehOIIKqhC1ZvnrfF79Z",
    "createdAt": "2023-06-04T14:41:47.000Z",
    "updatedAt": "2023-06-12T04:06:22.000Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoidGVzdC11c2VyIiwiZW1haWwiOiJ1c2VyMUBlbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRDeGFBYXV6RWRSWi91YWo0aTdRcnFleUVrVWJ0elZ1SFFNVFNuUG5UeVVwaWg2dkhWTm9MTyIsImNyZWF0ZWRBdCI6IjIwMjMtMDYtMDRUMTQ6NDE6NDcuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMTJUMDQ6MDY6MjIuMDAwWiJ9LCJpYXQiOjE2ODY2Njk1ODAsImV4cCI6MTY4NzI3NDM4MH0.tHHcTab9naoMF_BPVe2GRhjn3MwFrbOawAxXiH6YNHI"
}
```

### **Mitra**

| Usage    | Endpoint                      |
| -------- | ----------------------------- |
| Register | POST http://ecoease.api/mitra |

### **Example**

**parameters**

| Parameter    | Required | Deskripsi               |
| ------------ | -------- | ----------------------- |
| first_name   | Yes      | Nama depan pengguna     |
| last_name    | Yes      | Nama belakang pengguna  |
| email        | Yes      | Alamat email pengguna   |
| password     | Yes      | Password pengguna       |
| address      | Yes      | Alamat lengkap pengguna |
| photoFile    | No       | File foto pengguna      |
| phone_number | Yes      | Nomor telepon pengguna  |

**result**

```json
{
  "message": "Registration successful",
  "data": {
    "id": "61620a7e-c82c-4800-8e8c-fc368902b162",
    "first_name": "johan",
    "last_name": "hoho",
    "email": "wt22h@gmail.com",
    "phone_number": "00124577",
    "password": "$2b$10$/kFzErZBUQP40IP9FXNHOOQMwlVto7uZS82jThDzshcMu9BDsnpye",
    "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230613154147-foto.jpg",
    "updatedAt": "2023-06-13T15:41:47.819Z",
    "createdAt": "2023-06-13T15:41:47.819Z"
  }
}
```

### **Login Mitra**

| Usage    | Endpoint                            |
| -------- | ----------------------------------- |
| Register | POST http://ecoease.api/login-mitra |

### **Example**

**parameters**

| Parameter | Required | Deskripsi                   |
| --------- | -------- | --------------------------- |
| email     | Yes      | Email pengguna terdaftar    |
| password  | Yes      | Password pengguna terdaftar |

**result**

```json
{
  "message": "Login sukses",
  "data": {
    "id": "61620a7e-c82c-4800-8e8c-fc368902b162",
    "first_name": "johan",
    "last_name": "hoho",
    "email": "wt22h@gmail.com",
    "phone_number": "00124577",
    "password": "$2b$10$/kFzErZBUQP40IP9FXNHOOQMwlVto7uZS82jThDzshcMu9BDsnpye",
    "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230613154147-foto.jpg",
    "fcm_token": null,
    "createdAt": "2023-06-13T15:41:47.000Z",
    "updatedAt": "2023-06-13T15:41:47.000Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2MjBhN2UtYzgyYy00ODAwLThlOGMtZmMzNjg5MDJiMTYyIiwiZmlyc3RfbmFtZSI6ImpvaGFuIiwibGFzdF9uYW1lIjoiaG9obyIsImVtYWlsIjoid3QyMmhAZ21haWwuY29tIiwicGhvbmVfbnVtYmVyIjoiMDAxMjQ1NzciLCJwYXNzd29yZCI6IiQyYiQxMCQva0Z6RXJaQlVRUDQwSVA5RlhOSE9PUU13bFZ0bzd1WlM4MmpUaER6c2hjTXU5QkRzbnB5ZSIsInVybF9waG90b19wcm9maWxlIjoiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL21vbmV5LXRyYWNrZXItYnVja2V0MjIvMjAyMzA2MTMxNTQxNDctZm90by5qcGciLCJmY21fdG9rZW4iOm51bGwsImNyZWF0ZWRBdCI6IjIwMjMtMDYtMTNUMTU6NDE6NDcuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMTNUMTU6NDE6NDcuMDAwWiJ9LCJpYXQiOjE2ODY2NzEwMDYsImV4cCI6MTY4NzI3NTgwNn0.qxiw0KO3h1hxVA_ei5ZeFJseMc8vAXWkxyeK4YDBVLc"
}
```

### **Garbage** 🔑

| Usage        | Endpoint                                      |
| ------------ | --------------------------------------------- |
| Retrieve All | GET http://ecoease.api/garbage                |
| Add New      | POST http://ecoease.api/garbage               |
| Delete       | DELETE http://ecoease.api/garbage/delete/{id} |
| Edit         | PUT http://ecoease.api/garbage/update/{id}    |

### **Example Retrieve All**

**result get**

```json
{
  "message": "Success retrieve garbage data",
  "data": [
    {
      "id": "2d860bdd-689d-4f78-8d1a-cc6ec0474f0b",
      "type": "Sampah Kaca",
      "price": 350,
      "url_photo": "https://just-zero.org/wp-content/uploads/2023/05/shutterstock_1915276312.jpg",
      "createdAt": "2023-06-07T02:20:39.000Z",
      "updatedAt": "2023-06-07T02:20:39.000Z"
    }
  ]
}
```

### **Example Add new garbage**

**parameters**

| Parameter | Required | Deskripsi    |
| --------- | -------- | ------------ |
| type      | Yes      | Jenis sampah |
| price     | Yes      | Harga sampah |
| url_photo | Yes      | Foto sampah  |

**result**

```json
{
  "message": "Success add new garbage",
  "data": {
    "id": "75c012e7-66f7-4378-8f57-f334dcd50321",
    "type": "Sampah Plastik",
    "price": 200,
    "url_photo": "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/3/1/7/522317_gettyimages1325351577_726342.jpg",
    "updatedAt": "2023-06-13T15:59:53.300Z",
    "createdAt": "2023-06-13T15:59:53.300Z"
  }
}
```

### **Example Delete garbage**

**parameters**

| Parameter | Required | Deskripsi    |
| --------- | -------- | ------------ |
| type      | No       | Jenis sampah |
| price     | No       | Harga sampah |
| url_photo | No       | Foto sampah  |

**result**

```json
{
  "message": "Garbage updated successfully"
}
```

### **Example Edit garbage**

**result**

```json
{
  "message": "Garbage deleted successfully"
}
```

### **Location** 🔑

| Usage        | Endpoint                         |
| ------------ | -------------------------------- |
| Add New      | POST http://ecoease.api/location |
| Retrieve All | GET http://ecoease.api/location  |

### **Example Retrieve All**

**result get**

```json
{
  "message": "Success retrieve ;location data",
  "data": [
    {
      "id": "6fd90216-3d8d-4546-a3ee-2c7e396d1e34",
      "latitude": -7.9612583,
      "longitude": 112.6173917,
      "createdAt": "2023-06-08T10:09:07.000Z",
      "updatedAt": "2023-06-08T10:09:07.000Z"
    },
    {
      "id": "9df29858-fbd2-4854-a0a1-f31661f6a57b",
      "latitude": -7.9612583,
      "longitude": 112.6173917,
      "createdAt": "2023-06-08T09:51:02.000Z",
      "updatedAt": "2023-06-08T09:51:02.000Z"
    }
  ]
}
```

### **Example Add new locations**

**parameters**

| Parameter | Required | Deskripsi           |
| --------- | -------- | ------------------- |
| latitude  | Yes      | Koordinat latitude  |
| longitude | Yes      | Koordinat longitude |

**result**

```json
{
  "message": "Success post new location",
  "data": {
    "id": "11a07549-9c89-4c17-bb43-092674846d98",
    "latitude": 123.456,
    "longitude": 789.012,
    "updatedAt": "2023-06-13T16:23:15.138Z",
    "createdAt": "2023-06-13T16:23:15.138Z"
  }
}
```

### **Address** 🔑

| Usage                  | Endpoint                                    |
| ---------------------- | ------------------------------------------- |
| Add New                | POST http://ecoease.api/address             |
| Retrieve All           | GET http://ecoease.api/address              |
| Retrieve All by UserId | GET http://ecoease.api/address?userId=value |
| Use Saved Address      | PUT http://ecoease.api/address/use/:id      |
| Update                 | PUT http://ecoease.api/address/:id          |
| Delete                 | DELETE http://ecoease.api/address/:id       |

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

```

```

```

```

```

```

```

```
