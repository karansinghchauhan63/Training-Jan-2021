

export interface StudentList
{
  
   studentname :
   {
      firstname:string,
      middlename:string,
      lastname:string
   },
   dob:Date,
   birthplace:string,
   firstlanguage:string,
   address:{
      city:string,
      state:string,
      country:string,
      pincode:number
    },
    mothername:
    {
        firstname:string,
        middlename:string,
        lastname:string
    },
    motherdetails:
    {
      email:string,
      education:string,
      profession:string,
      designation:string,
      phoneno:number   

    },
    fathername:
    {
        firstname:string,
        middlename:string,
        lastname:string
    },
    fatherdetails:
    {
      email:string,
      education:string,
      profession:string,
      designation:string,
      phoneno:number   

    },
    emergencycontact:
    {
      relation:string,
      contactno:number
    },
    reference:
    {
      referencename:string,
      address:string,
      contactno:number
    }

}

 


 





