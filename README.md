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

### **Example Add new address**

**parameters**

**Request Parameters**

| Parameter | Required | Deskripsi                         |
| --------- | -------- | --------------------------------- |
| name      | Yes      | Nama alamat                       |
| detail    | Yes      | Detail alamat                     |
| district  | Yes      | Nama distrik                      |
| city      | Yes      | Nama kota                         |
| user_id   | Yes      | ID pengguna terkait dengan alamat |
| selected  | No       | Status pilihan alamat             |
| deleted   | No       | Status penghapusan alamat         |

**result**

```json
{
  "message": "Success adding new address",
  "address": {
    "id": "987a94b9-8a75-4171-8182-e39b06c0ed62",
    "name": "Jl prof herman yohanes989",
    "detail": "Samping indomraet",
    "district": "Terban",
    "city": "yogya",
    "user_id": "3a627376-b4da-45af-9454-d982ccd4d106",
    "selected": false,
    "deleted": false,
    "updatedAt": "2023-06-13T17:19:08.559Z",
    "createdAt": "2023-06-13T17:19:08.559Z"
  }
}
```

### **Example update new address**

**parameters**

**Request Parameters**

| Parameter | Required | Deskripsi                         |
| --------- | -------- | --------------------------------- |
| name      | Yes      | Nama alamat                       |
| detail    | Yes      | Detail alamat                     |
| district  | Yes      | Nama distrik                      |
| city      | Yes      | Nama kota                         |
| user_id   | Yes      | ID pengguna terkait dengan alamat |
| selected  | No       | Status pilihan alamat             |
| deleted   | No       | Status penghapusan alamat         |

**result**

```json
{
  "message": "Address updated successfully"
}
```

### **Example get all address**

**result**

```json
{
  "message": "Success retrieve data",
  "data": [
    {
      "id": "3a627376-b4da-45af-9454-d982ccd4d106",
      "name": "asdasdqwe",
      "detail": "asdad",
      "district": "asdasd",
      "city": "zasdasd",
      "user_id": "test-user",
      "selected": false,
      "deleted": true,
      "createdAt": "2023-06-08T15:19:07.000Z",
      "updatedAt": "2023-06-13T16:58:00.000Z"
    },
    {
      "id": "44b78a1e-bb5e-4580-91de-e3fece4ddcdd",
      "name": "qweqwe",
      "detail": "qweqwe",
      "district": "qweqwe",
      "city": "qweqwe",
      "user_id": "test-user",
      "selected": false,
      "deleted": true,
      "createdAt": "2023-06-08T14:06:59.000Z",
      "updatedAt": "2023-06-13T16:58:00.000Z"
    },
    {
      "id": "4c5b0dd2-e5b3-4e2b-96eb-a90d505978a5",
      "name": "test",
      "detail": "test",
      "district": "test",
      "city": "test",
      "user_id": "test-user",
      "selected": false,
      "deleted": true,
      "createdAt": "2023-06-07T02:54:20.000Z",
      "updatedAt": "2023-06-13T16:58:00.000Z"
    }
  ]
}
```

### **Example delete selected address**

**result**

```json
{
  "message": "Address deleted successfully",
  "data": {
    "id": "987a94b9-8a75-4171-8182-e39b06c0ed62",
    "name": "Jl prof herman yohanes989",
    "detail": "Samping indomraet",
    "district": "gondokusuman",
    "city": "yogya",
    "user_id": "3a627376-b4da-45af-9454-d982ccd4d106",
    "selected": false,
    "deleted": true,
    "createdAt": "2023-06-13T17:19:08.000Z",
    "updatedAt": "2023-06-13T17:27:55.892Z"
  }
}
```

### **Detail Transaction** 🔑

| Usage              | Endpoint                                   |
| ------------------ | ------------------------------------------ |
| Add New Batch Data | POST http://ecoease.api/detail-transaction |
| Retrieve All       | GET http://ecoease.api/detail-transaction  |

### **Example Get all detail transactions**

**result**

```json
{
  "message": "Success retrieve data",
  "data": [
    {
      "garbage_id": "91c63fc4-4811-45f5-8141-0c345d79aed9",
      "order_id": "dcc2e120-5947-414a-95b8-c1b475f3b32e",
      "qty": 1,
      "total": 400,
      "createdAt": "2023-06-07T02:54:40.000Z",
      "updatedAt": "2023-06-07T02:54:40.000Z"
    },
    {
      "garbage_id": "c74667de-9ec4-41b5-8584-9e1ad8967b95",
      "order_id": "dcc2e120-5947-414a-95b8-c1b475f3b32e",
      "qty": 1,
      "total": 200,
      "createdAt": "2023-06-07T02:54:40.000Z",
      "updatedAt": "2023-06-07T02:54:40.000Z"
    },
    {
      "garbage_id": "91c63fc4-4811-45f5-8141-0c345d79aed9",
      "order_id": "53084034-738a-4a4d-9f80-c46a9b5561ba",
      "qty": 1,
      "total": 400,
      "createdAt": "2023-06-08T09:51:02.000Z",
      "updatedAt": "2023-06-08T09:51:02.000Z"
    }
  ]
}
```

### **Example Add new Detail Transactions**

**parameters**

**Request Parameters**

| Parameter  | Required | Deskripsi                                |
| ---------- | -------- | ---------------------------------------- |
| garbage_id | Yes      | ID sampah yang terkait dengan transaksi  |
| order_id   | Yes      | ID pesanan yang terkait dengan transaksi |
| qty        | Yes      | Jumlah sampah dalam transaksi            |
| total      | Yes      | Total harga transaksi                    |

**result**

```json
{
  "message": "Success post batch datas",
  "data": [
    {
      "order_id": "test",
      "garbage_id": "test-1",
      "qty": 8,
      "total": 10,
      "createdAt": "2023-06-14T17:32:54.828Z",
      "updatedAt": "2023-06-14T17:32:54.828Z"
    },
    {
      "order_id": "test",
      "garbage_id": "test-2",
      "qty": 18,
      "total": 100,
      "createdAt": "2023-06-14T17:32:54.828Z",
      "updatedAt": "2023-06-14T17:32:54.828Z"
    }
  ]
}
```

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

### **Example Get All Orders**

**result**

```json
{
  "message": "Success retrieve orders data",
  "data": [
    {
      "id": "adb6caf8-b18d-4abd-b3d0-e0710d6d2bb9",
      "status": "CANCELED",
      "total_transaction": 400,
      "user_id": "test-user",
      "mitra_id": "7d073efb-67db-4b7e-be20-0774e556deaf",
      "location_id": "6fd90216-3d8d-4546-a3ee-2c7e396d1e34",
      "address_id": "4c5b0dd2-e5b3-4e2b-96eb-a90d505978a5",
      "createdAt": "2023-06-08T10:09:07.000Z",
      "updatedAt": "2023-06-10T14:09:32.000Z",
      "address": {
        "id": "4c5b0dd2-e5b3-4e2b-96eb-a90d505978a5",
        "name": "test",
        "detail": "test",
        "district": "test",
        "city": "test",
        "user_id": "test-user",
        "selected": false,
        "deleted": true,
        "createdAt": "2023-06-07T02:54:20.000Z",
        "updatedAt": "2023-06-14T03:10:28.000Z"
      },
      "garbages": [
        {
          "id": "91c63fc4-4811-45f5-8141-0c345d79aed9",
          "type": "Sampah Metal",
          "price": 400,
          "url_photo": "https://thumbs.dreamstime.com/z/group-recycling-tins-cans-sample-trash-tin-can-be-recycled-232205994.jpg",
          "createdAt": "2023-06-07T02:15:32.000Z",
          "updatedAt": "2023-06-07T02:15:32.000Z",
          "detailtransaction": {
            "garbage_id": "91c63fc4-4811-45f5-8141-0c345d79aed9",
            "order_id": "adb6caf8-b18d-4abd-b3d0-e0710d6d2bb9",
            "qty": 1,
            "total": 400,
            "createdAt": "2023-06-08T10:09:07.000Z",
            "updatedAt": "2023-06-08T10:09:07.000Z"
          }
        }
      ],
      "location": {
        "id": "6fd90216-3d8d-4546-a3ee-2c7e396d1e34",
        "latitude": -7.9612583,
        "longitude": 112.6173917,
        "createdAt": "2023-06-08T10:09:07.000Z",
        "updatedAt": "2023-06-08T10:09:07.000Z"
      },
      "mitra": {
        "id": "7d073efb-67db-4b7e-be20-0774e556deaf",
        "first_name": "mitra 1",
        "last_name": "lastname mitra 1",
        "email": "pakkepalageng@email.com",
        "phone_number": null,
        "password": "$2b$10$JtLgnz0FBeh7Fl3vjbrz5uDO.rGlZybbivBpSVUkw807U8twLJFCy",
        "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230610053138-MyTuning.png",
        "fcm_token": "eUdCtP_XQ4elBspB9d2u2m:APA91bH93iln7srCL55qX5wFb_Nh4RWbkWYrelFRunxg2WILRcCOZ-QB_sMF3LfwXVTswoo9pQVpXKHQNAIA4jgzlg7w8VwK9qEa5WbqDCQ9uq4lS7LtWnz6Pb9SDhAybphyWvI7zcRd",
        "createdAt": "2023-06-10T05:31:39.000Z",
        "updatedAt": "2023-06-13T05:43:36.000Z"
      },
      "user": {
        "id": "test-user",
        "firstName": "user-1",
        "lastName": "lastname-1",
        "email": "user1@email.com",
        "password": "$2b$10$CxaAauzEdRZ/uaj4i7QrqeyEkUbtzVuHQMTSnPnTyUpih6vHVNoLO",
        "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230604214141-avatar new.png",
        "phone_number": "081230812312",
        "fcm_token": "exi3qpnEQ7yM6ZFqywA2KY:APA91bGNQUInnRyGxtpP3AXcUq5IUVn-sF16MhLHemNvEYps-zOxdFVsyMUK1BwY9c3diAiPQ8-VA8UrUlphMERK_DREK5zRzypDvLEzHGCGdOfm3QnFXkOMFcXYoC5sRkPM26mPGNT6",
        "createdAt": "2023-06-04T14:41:47.000Z",
        "updatedAt": "2023-06-14T02:43:04.000Z"
      }
    }
  ]
}
```

### **Example Get Availables Orders**

**result**

```json
{
  "message": "Success retrieve orders data",
  "data": [
    {
      "id": "4821d489-8199-4ada-bea6-4dccd81dd2df",
      "status": "NOT_TAKEN",
      "total_transaction": 10000,
      "user_id": "test-user",
      "mitra_id": null,
      "location_id": "cf4fbb4d-d64b-4c1b-a3a7-3f5183371e26",
      "address_id": "3a627376-b4da-45af-9454-d982ccd4d106",
      "createdAt": "2023-06-10T06:29:27.000Z",
      "updatedAt": "2023-06-10T06:29:27.000Z",
      "address": {
        "id": "3a627376-b4da-45af-9454-d982ccd4d106",
        "name": "asdasdqwe",
        "detail": "asdad",
        "district": "asdasd",
        "city": "zasdasd",
        "user_id": "test-user",
        "selected": false,
        "deleted": true,
        "createdAt": "2023-06-08T15:19:07.000Z",
        "updatedAt": "2023-06-14T03:10:28.000Z"
      },
      "garbages": [
        {
          "id": "2d860bdd-689d-4f78-8d1a-cc6ec0474f0b",
          "type": "Sampah Kaca",
          "price": 350,
          "url_photo": "https://just-zero.org/wp-content/uploads/2023/05/shutterstock_1915276312.jpg",
          "createdAt": "2023-06-07T02:20:39.000Z",
          "updatedAt": "2023-06-07T02:20:39.000Z",
          "detailtransaction": {
            "garbage_id": "2d860bdd-689d-4f78-8d1a-cc6ec0474f0b",
            "order_id": "4821d489-8199-4ada-bea6-4dccd81dd2df",
            "qty": 180890,
            "total": 100,
            "createdAt": "2023-06-10T06:29:27.000Z",
            "updatedAt": "2023-06-10T06:29:27.000Z"
          }
        },
        {
          "id": "91c63fc4-4811-45f5-8141-0c345d79aed9",
          "type": "Sampah Metal",
          "price": 400,
          "url_photo": "https://thumbs.dreamstime.com/z/group-recycling-tins-cans-sample-trash-tin-can-be-recycled-232205994.jpg",
          "createdAt": "2023-06-07T02:15:32.000Z",
          "updatedAt": "2023-06-07T02:15:32.000Z",
          "detailtransaction": {
            "garbage_id": "91c63fc4-4811-45f5-8141-0c345d79aed9",
            "order_id": "4821d489-8199-4ada-bea6-4dccd81dd2df",
            "qty": 18,
            "total": 100,
            "createdAt": "2023-06-10T06:29:27.000Z",
            "updatedAt": "2023-06-10T06:29:27.000Z"
          }
        }
      ],
      "location": {
        "id": "cf4fbb4d-d64b-4c1b-a3a7-3f5183371e26",
        "latitude": 0,
        "longitude": 0,
        "createdAt": "2023-06-10T06:29:27.000Z",
        "updatedAt": "2023-06-10T06:29:27.000Z"
      },
      "mitra": null,
      "user": {
        "id": "test-user",
        "firstName": "user-1",
        "lastName": "lastname-1",
        "email": "user1@email.com",
        "password": "$2b$10$CxaAauzEdRZ/uaj4i7QrqeyEkUbtzVuHQMTSnPnTyUpih6vHVNoLO",
        "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230604214141-avatar new.png",
        "phone_number": "081230812312",
        "fcm_token": "exi3qpnEQ7yM6ZFqywA2KY:APA91bGNQUInnRyGxtpP3AXcUq5IUVn-sF16MhLHemNvEYps-zOxdFVsyMUK1BwY9c3diAiPQ8-VA8UrUlphMERK_DREK5zRzypDvLEzHGCGdOfm3QnFXkOMFcXYoC5sRkPM26mPGNT6",
        "createdAt": "2023-06-04T14:41:47.000Z",
        "updatedAt": "2023-06-14T02:43:04.000Z"
      }
    }
  ]
}
```

### **Example Get Order by ID**

**result**

```json
{
  "message": "Success retrieve orders data",
  "data": {
    "id": "53084034-738a-4a4d-9f80-c46a9b5561ba",
    "status": "FINISHED",
    "total_transaction": 400,
    "user_id": "test-user",
    "mitra_id": "7d073efb-67db-4b7e-be20-0774e556deaf",
    "location_id": "9df29858-fbd2-4854-a0a1-f31661f6a57b",
    "address_id": "4c5b0dd2-e5b3-4e2b-96eb-a90d505978a5",
    "createdAt": "2023-06-08T09:51:02.000Z",
    "updatedAt": "2023-06-10T06:25:46.000Z",
    "address": {
      "id": "4c5b0dd2-e5b3-4e2b-96eb-a90d505978a5",
      "name": "test",
      "detail": "test",
      "district": "test",
      "city": "test",
      "user_id": "test-user",
      "selected": false,
      "deleted": true,
      "createdAt": "2023-06-07T02:54:20.000Z",
      "updatedAt": "2023-06-14T03:10:28.000Z"
    },
    "garbages": [
      {
        "id": "91c63fc4-4811-45f5-8141-0c345d79aed9",
        "type": "Sampah Metal",
        "price": 400,
        "url_photo": "https://thumbs.dreamstime.com/z/group-recycling-tins-cans-sample-trash-tin-can-be-recycled-232205994.jpg",
        "createdAt": "2023-06-07T02:15:32.000Z",
        "updatedAt": "2023-06-07T02:15:32.000Z",
        "detailtransaction": {
          "garbage_id": "91c63fc4-4811-45f5-8141-0c345d79aed9",
          "order_id": "53084034-738a-4a4d-9f80-c46a9b5561ba",
          "qty": 1,
          "total": 400,
          "createdAt": "2023-06-08T09:51:02.000Z",
          "updatedAt": "2023-06-08T09:51:02.000Z"
        }
      }
    ],
    "location": {
      "id": "9df29858-fbd2-4854-a0a1-f31661f6a57b",
      "latitude": -7.9612583,
      "longitude": 112.6173917,
      "createdAt": "2023-06-08T09:51:02.000Z",
      "updatedAt": "2023-06-08T09:51:02.000Z"
    },
    "mitra": {
      "id": "7d073efb-67db-4b7e-be20-0774e556deaf",
      "first_name": "mitra 1",
      "last_name": "lastname mitra 1",
      "email": "pakkepalageng@email.com",
      "phone_number": null,
      "password": "$2b$10$JtLgnz0FBeh7Fl3vjbrz5uDO.rGlZybbivBpSVUkw807U8twLJFCy",
      "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230610053138-MyTuning.png",
      "fcm_token": "eUdCtP_XQ4elBspB9d2u2m:APA91bH93iln7srCL55qX5wFb_Nh4RWbkWYrelFRunxg2WILRcCOZ-QB_sMF3LfwXVTswoo9pQVpXKHQNAIA4jgzlg7w8VwK9qEa5WbqDCQ9uq4lS7LtWnz6Pb9SDhAybphyWvI7zcRd",
      "createdAt": "2023-06-10T05:31:39.000Z",
      "updatedAt": "2023-06-13T05:43:36.000Z"
    },
    "user": {
      "id": "test-user",
      "firstName": "user-1",
      "lastName": "lastname-1",
      "email": "user1@email.com",
      "password": "$2b$10$CxaAauzEdRZ/uaj4i7QrqeyEkUbtzVuHQMTSnPnTyUpih6vHVNoLO",
      "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230604214141-avatar new.png",
      "phone_number": "081230812312",
      "fcm_token": "exi3qpnEQ7yM6ZFqywA2KY:APA91bGNQUInnRyGxtpP3AXcUq5IUVn-sF16MhLHemNvEYps-zOxdFVsyMUK1BwY9c3diAiPQ8-VA8UrUlphMERK_DREK5zRzypDvLEzHGCGdOfm3QnFXkOMFcXYoC5sRkPM26mPGNT6",
      "createdAt": "2023-06-04T14:41:47.000Z",
      "updatedAt": "2023-06-14T02:43:04.000Z"
    }
  }
}
```

### **Example Get Order by user ID**

**result**

```json
{
  "message": "Success retrieve orders data",
  "data": [
    {
      "id": "adb6caf8-b18d-4abd-b3d0-e0710d6d2bb9",
      "status": "CANCELED",
      "total_transaction": 400,
      "user_id": "test-user",
      "mitra_id": "7d073efb-67db-4b7e-be20-0774e556deaf",
      "location_id": "6fd90216-3d8d-4546-a3ee-2c7e396d1e34",
      "address_id": "4c5b0dd2-e5b3-4e2b-96eb-a90d505978a5",
      "createdAt": "2023-06-08T10:09:07.000Z",
      "updatedAt": "2023-06-10T14:09:32.000Z",
      "address": {
        "id": "4c5b0dd2-e5b3-4e2b-96eb-a90d505978a5",
        "name": "test",
        "detail": "test",
        "district": "test",
        "city": "test",
        "user_id": "test-user",
        "selected": false,
        "deleted": true,
        "createdAt": "2023-06-07T02:54:20.000Z",
        "updatedAt": "2023-06-14T03:10:28.000Z"
      },
      "garbages": [
        {
          "id": "91c63fc4-4811-45f5-8141-0c345d79aed9",
          "type": "Sampah Metal",
          "price": 400,
          "url_photo": "https://thumbs.dreamstime.com/z/group-recycling-tins-cans-sample-trash-tin-can-be-recycled-232205994.jpg",
          "createdAt": "2023-06-07T02:15:32.000Z",
          "updatedAt": "2023-06-07T02:15:32.000Z",
          "detailtransaction": {
            "garbage_id": "91c63fc4-4811-45f5-8141-0c345d79aed9",
            "order_id": "adb6caf8-b18d-4abd-b3d0-e0710d6d2bb9",
            "qty": 1,
            "total": 400,
            "createdAt": "2023-06-08T10:09:07.000Z",
            "updatedAt": "2023-06-08T10:09:07.000Z"
          }
        }
      ],
      "location": {
        "id": "6fd90216-3d8d-4546-a3ee-2c7e396d1e34",
        "latitude": -7.9612583,
        "longitude": 112.6173917,
        "createdAt": "2023-06-08T10:09:07.000Z",
        "updatedAt": "2023-06-08T10:09:07.000Z"
      },
      "mitra": {
        "id": "7d073efb-67db-4b7e-be20-0774e556deaf",
        "first_name": "mitra 1",
        "last_name": "lastname mitra 1",
        "email": "pakkepalageng@email.com",
        "phone_number": null,
        "password": "$2b$10$JtLgnz0FBeh7Fl3vjbrz5uDO.rGlZybbivBpSVUkw807U8twLJFCy",
        "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230610053138-MyTuning.png",
        "fcm_token": "eUdCtP_XQ4elBspB9d2u2m:APA91bH93iln7srCL55qX5wFb_Nh4RWbkWYrelFRunxg2WILRcCOZ-QB_sMF3LfwXVTswoo9pQVpXKHQNAIA4jgzlg7w8VwK9qEa5WbqDCQ9uq4lS7LtWnz6Pb9SDhAybphyWvI7zcRd",
        "createdAt": "2023-06-10T05:31:39.000Z",
        "updatedAt": "2023-06-13T05:43:36.000Z"
      },
      "user": {
        "id": "test-user",
        "firstName": "user-1",
        "lastName": "lastname-1",
        "email": "user1@email.com",
        "password": "$2b$10$CxaAauzEdRZ/uaj4i7QrqeyEkUbtzVuHQMTSnPnTyUpih6vHVNoLO",
        "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230604214141-avatar new.png",
        "phone_number": "081230812312",
        "fcm_token": "exi3qpnEQ7yM6ZFqywA2KY:APA91bGNQUInnRyGxtpP3AXcUq5IUVn-sF16MhLHemNvEYps-zOxdFVsyMUK1BwY9c3diAiPQ8-VA8UrUlphMERK_DREK5zRzypDvLEzHGCGdOfm3QnFXkOMFcXYoC5sRkPM26mPGNT6",
        "createdAt": "2023-06-04T14:41:47.000Z",
        "updatedAt": "2023-06-14T02:43:04.000Z"
      }
    }
  ]
}
```

### **Example Cancel Order**

path:api/v1/orders/cancel

**parameters**

| Parameter | Required | Deskripsi    |
| --------- | -------- | ------------ |
| id        | Yes      | ID order     |
| status    | Yes      | Status Order |

**result**

```json
{
  "message": "Success canceled order ",
  "data": [1]
}
```

### **Example Cancel Order by Mitra**

path:api/v1/orders/cancel

**parameters**

| Parameter | Required | Deskripsi |
| --------- | -------- | --------- |
| id        | Yes      | ID order  |
| mitra_id  | Yes      | ID Mitra  |

**result**

```json
{
  "message": "Success canceled order by mitra 7d073efb-67db-4b7e-be20-0774e556deaf",
  "data": [1]
}
```

### **Example Pick Up Order**

path:api/v1/orders/pickup

**parameters**

| Parameter | Required | Deskripsi    |
| --------- | -------- | ------------ |
| mitra_id  | Yes      | ID Mitra     |
| id        | Yes      | ID order     |
| status    | Yes      | Status Order |

**result**

```json
{
  "message": "Success pick order",
  "data": [1]
}
```

### **Example update status Order**

path: api/v1/orders/cancel

**parameters**

| Parameter | Required | Deskripsi    |
| --------- | -------- | ------------ |
| id        | Yes      | ID order     |
| mitra_id  | Yes      | ID Mitra     |
| status    | Yes      | Status order |

**result**

```json
{
  "message": "Success update order status",
  "data": [1]
}
```

### **Example add order with detail transaction**

**parameters**

| Parameter                        | Deskripsi                               |
| -------------------------------- | --------------------------------------- |
| location.latitude                | Latitude lokasi pengiriman              |
| location.longitude               | Longitude lokasi pengiriman             |
| order.total_transaction          | Total transaksi dalam jumlah tertentu   |
| order.user_id                    | ID pengguna yang melakukan transaksi    |
| order.address_id                 | ID alamat pengiriman                    |
| detailTransactions[0].garbage_id | ID sampah pada detail transaksi         |
| detailTransactions[0].qty        | Jumlah sampah dalam transaksi           |
| detailTransactions[0].total      | Total harga untuk jenis sampah tertentu |
| detailTransactions[1].garbage_id | ID sampah pada detail transaksi         |
| detailTransactions[1].qty        | Jumlah sampah dalam transaksi           |
| detailTransactions[1].total      | Total harga untuk jenis sampah tertentu |

**result**

```json
{
  "message": "Success adding new order transaction",
  "data": {
    "order": {
      "id": "1970319b-18b6-46ca-ae13-2b34def98e74",
      "status": "NOT_TAKEN",
      "total_transaction": 10000,
      "user_id": "test-user",
      "address_id": "3a627376-b4da-45af-9454-d982ccd4d106",
      "location_id": "91f09de0-e27d-442a-87f6-b3d2432d8175",
      "updatedAt": "2023-06-14T18:46:46.223Z",
      "createdAt": "2023-06-14T18:46:46.223Z"
    },
    "location": {
      "latitude": -7.965349062486202,
      "longitude": 112.61722261488184
    },
    "detailTransactions": [
      {
        "garbage_id": "2d860bdd-689d-4f78-8d1a-cc6ec0474f0b",
        "qty": 180890,
        "total": 100,
        "order_id": "1970319b-18b6-46ca-ae13-2b34def98e74",
        "createdAt": "2023-06-14T18:46:46.237Z",
        "updatedAt": "2023-06-14T18:46:46.237Z"
      },
      {
        "garbage_id": "91c63fc4-4811-45f5-8141-0c345d79aed9",
        "qty": 18,
        "total": 100,
        "order_id": "1970319b-18b6-46ca-ae13-2b34def98e74",
        "createdAt": "2023-06-14T18:46:46.237Z",
        "updatedAt": "2023-06-14T18:46:46.237Z"
      }
    ]
  }
}
```

### **Chat Room** 🔑

| Usage              | Endpoint                                             |
| ------------------ | ---------------------------------------------------- |
| Add New            | POST http://ecoease.api/api/v1/chatrooms             |
| Retrieve All       | GET http://ecoease.api/api/v1/chatrooms              |
| Retrieve All by Id | GET http://ecoease.api/api/v1/chatrooms?mitraId={id} |
| Delete             | GET http://ecoease.api/api/v1/chatrooms/delete/id    |

### **Example Add new chatroom**

**parameters**

| Parameter | Deskripsi |
| --------- | --------- |
| user_id   | ID user   |
| mitra_id  | ID mitra  |

**result**

```json

```

### **Example Retrieve all chatroom**

**result**

```json
{
  "message": "Success post new chatroom",
  "data": [
    {
      "id": "182fdf86-2f17-430f-9c1b-7b2415a45945",
      "mitra_id": "7d073efb-67db-4b7e-be20-0774e556deaf",
      "user_id": "test-user",
      "createdAt": "2023-06-12T10:14:01.000Z",
      "updatedAt": "2023-06-12T10:14:01.000Z",
      "mitra": {
        "id": "7d073efb-67db-4b7e-be20-0774e556deaf",
        "first_name": "mitra 1",
        "last_name": "lastname mitra 1",
        "email": "pakkepalageng@email.com",
        "phone_number": null,
        "password": "$2b$10$JtLgnz0FBeh7Fl3vjbrz5uDO.rGlZybbivBpSVUkw807U8twLJFCy",
        "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230610053138-MyTuning.png",
        "fcm_token": "eUdCtP_XQ4elBspB9d2u2m:APA91bH93iln7srCL55qX5wFb_Nh4RWbkWYrelFRunxg2WILRcCOZ-QB_sMF3LfwXVTswoo9pQVpXKHQNAIA4jgzlg7w8VwK9qEa5WbqDCQ9uq4lS7LtWnz6Pb9SDhAybphyWvI7zcRd",
        "createdAt": "2023-06-10T05:31:39.000Z",
        "updatedAt": "2023-06-13T05:43:36.000Z"
      },
      "user": {
        "id": "test-user",
        "firstName": "user-1",
        "lastName": "lastname-1",
        "email": "user1@email.com",
        "password": "$2b$10$CxaAauzEdRZ/uaj4i7QrqeyEkUbtzVuHQMTSnPnTyUpih6vHVNoLO",
        "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230604214141-avatar new.png",
        "phone_number": "081230812312",
        "fcm_token": "exi3qpnEQ7yM6ZFqywA2KY:APA91bGNQUInnRyGxtpP3AXcUq5IUVn-sF16MhLHemNvEYps-zOxdFVsyMUK1BwY9c3diAiPQ8-VA8UrUlphMERK_DREK5zRzypDvLEzHGCGdOfm3QnFXkOMFcXYoC5sRkPM26mPGNT6",
        "createdAt": "2023-06-04T14:41:47.000Z",
        "updatedAt": "2023-06-14T02:43:04.000Z"
      }
    }
  ]
}
```

### **Example Retrieve Chat room by mitra ID**

**result**

```JSON
{
    "message": "Success post new chatroom",
    "data": [
        {
            "id": "182fdf86-2f17-430f-9c1b-7b2415a45945",
            "mitra_id": "7d073efb-67db-4b7e-be20-0774e556deaf",
            "user_id": "test-user",
            "createdAt": "2023-06-12T10:14:01.000Z",
            "updatedAt": "2023-06-12T10:14:01.000Z",
            "mitra": {
                "id": "7d073efb-67db-4b7e-be20-0774e556deaf",
                "first_name": "mitra 1",
                "last_name": "lastname mitra 1",
                "email": "pakkepalageng@email.com",
                "phone_number": null,
                "password": "$2b$10$JtLgnz0FBeh7Fl3vjbrz5uDO.rGlZybbivBpSVUkw807U8twLJFCy",
                "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230610053138-MyTuning.png",
                "fcm_token": "eUdCtP_XQ4elBspB9d2u2m:APA91bH93iln7srCL55qX5wFb_Nh4RWbkWYrelFRunxg2WILRcCOZ-QB_sMF3LfwXVTswoo9pQVpXKHQNAIA4jgzlg7w8VwK9qEa5WbqDCQ9uq4lS7LtWnz6Pb9SDhAybphyWvI7zcRd",
                "createdAt": "2023-06-10T05:31:39.000Z",
                "updatedAt": "2023-06-13T05:43:36.000Z"
            },
            "user": {
                "id": "test-user",
                "firstName": "user-1",
                "lastName": "lastname-1",
                "email": "user1@email.com",
                "password": "$2b$10$CxaAauzEdRZ/uaj4i7QrqeyEkUbtzVuHQMTSnPnTyUpih6vHVNoLO",
                "url_photo_profile": "https://storage.googleapis.com/money-tracker-bucket22/20230604214141-avatar new.png",
                "phone_number": "081230812312",
                "fcm_token": "exi3qpnEQ7yM6ZFqywA2KY:APA91bGNQUInnRyGxtpP3AXcUq5IUVn-sF16MhLHemNvEYps-zOxdFVsyMUK1BwY9c3diAiPQ8-VA8UrUlphMERK_DREK5zRzypDvLEzHGCGdOfm3QnFXkOMFcXYoC5sRkPM26mPGNT6",
                "createdAt": "2023-06-04T14:41:47.000Z",
                "updatedAt": "2023-06-14T02:43:04.000Z"
            }
        },
    ]
}
```

### **Example Retrieve Chat room by mitra ID**

**result**

```JSON
{
    "message": "Success delete chatroom",
    "data": 1
}
```

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

```

```

```

```

```

```

```

```

```

```

```

```
