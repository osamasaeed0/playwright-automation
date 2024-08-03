import{test, expect} from '@playwright/test'
var userid;
        
test ('Testing Api Get user',async({request})=>{ 
  const responseApi = await request.get('https://reqres.in/api/users/2');
  console.log(await responseApi.json());
  expect(responseApi.status()).toBe(200);
})


test ('Post user',async({request})=>{
  const response  = await request.post('https://reqres.in/api/users',
    {
        data:{"name":"osama","job":"trainer"},
        headers:{"Accept":"application/json"}
    }
  );
  console.log(await response.json());
  expect(response.status()).toBe(201);
  var res = await response.json();
  userid=res.id
})


test ('Update user',async({request})=>{
    const response  = await request.put('https://reqres.in/api/users/2', + userid ,
      {
          data:{"name":"osama","job":"Software engineer"},
          headers:{"Accept":"application/json"}
      }
    );
    console.log(await response.json());
    expect(response.status()).toBe(200);
})
  


test ('Delete user',async({request})=>{
  const response = await request.delete('https://reqres.in/api/users/2')
 expect(response.status()).toBe(204);
})