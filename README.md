# Mockup Graphql
## Packages
- express
- apollo-server-express
- casual
## Setup Graphql Mockup
1. git clone 
2. Jalankan `npm install`
3. Jalankan `node server`
4. akses endpoint `localhost:4000/graphql`

## Mocks Resolve
1. Sebelum membuat mocks, baiknya kita sudah menentukan type definition, seperti dibawah ini :
   ```js
   const typeDefs = gql`
    type Query {
        hello: String
        number: Int
    }
    `;
   ```
2. Membuat mock resolver dengan data statik :
   ```js
   const mocks = {
    String: () => 'Hello Human !',
    Int: () => 100
    };
   ```
   Dengan mock resolver seperti diatas, maka setiap kali client melakukan query dengan type `hello` akan mendapatkan response `Hello Human !`.
3. Membuat mock resolver dengan data dinamis.
   <br>
   Bisa menggunakan [`casual`](https://www.npmjs.com/package/casual) untuk membuat data yang dinamis, jadi data akan berubah setiap kali client melakukan request ke server.
   ```js
   const mocks = {
    String: () => casual.text,
    Int: () => casual.integer((from = 0), (to = 11))
    };
   ```