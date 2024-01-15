# Firebase projects
<a href="#" style="padding:0.5rem 0.8rem;background-color:#ff248a; width:fit-content; border-radius:0.5rem;font-weight:bold; letter-spacing:1px;
color:white;">React</a>
<a href="#" style="padding:0.5rem 0.8rem;background-color:#ff248a; width:fit-content; border-radius:0.5rem;font-weight:bold; letter-spacing:1px;
color:white;">firebase</a>
### main Class
````javascript
import {Connect} from "database";

// connect to firebase using connect 
// there 3 args  to this function
// link and key and project  ID
let db = connect(/*3 args*/);
db.create("user",{
    /*create all data as object
    example:
    {
        name:null,
        age:null,
        country:null
        profile:null
    } 

    */
})
db.update();
db.delete()
db.read()
````

<div style="width:100%; height:100px; background-color:#dfdadc; border-radius:0.5rem;display:flex;justify-content:center;align-items:center;">
  <button style="background-color:#000000;border:none;color:#ffffff;padding:0.4rem 0.7rem; border-radius:0.5rem;">visiteapp</button>
</div>