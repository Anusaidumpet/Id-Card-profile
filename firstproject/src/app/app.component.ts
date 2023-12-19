import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';  
import { bindCallback } from 'rxjs';
  

@Component({  
    selector: 'my-app',
    templateUrl: 'app.component.html',  
    styleUrls: [ './app.component.css' ]
    
})  

export class AppComponent {  
    
    isShown: boolean = true ; // hidden by default
    toggleShow() {
   


this.isShown = ! this.isShown;

styles: [`
. Online{
color: black;
background-color:blue;
}`]

}
  
    employees: any[] = [  
        {  
            code: 'employee1', name: 'M.Karthik', gender: 'Male', 
            annualSalary: 55000, dateOfBirth: '25/6/1988' ,color:'blue' 
        },  
        {  
            code: 'employee2', name: 'K.sachin', gender: 'Male',  
            annualSalary: 57000.95, dateOfBirth: '9/6/1982'  
        },  
        {  
            code: 'employee3', name: 'S.rahul', gender: 'Male',  
            annualSalary: 59000, dateOfBirth: '12/8/1979'  
        },  
        {  
            code: 'employee4', name: 'A.Mary', gender: 'Female',
            annualSalary: 65000.826, dateOfBirth: '14/10/1980'  
        },  
    ];  

    inncircles: any[] = [  
        {  
             name: 'K.Swapna',gender:'Female', proffesion:'Webdeveloper',
             company:'Cognizant India, Cognizant Technology Solutions',  address:'Hyderabad',
             Image:'../assets/swapna.jpg'
        }, 
        {  
            name: 'D.Rajesham', gender:'Male', proffesion:'Debugging-Frontend and Backend',
        company:'Google India Google  Technology Solutions',  address:'Hyderabad',
        Image:'../assets/rejesham.jpg'
    },
        {  
            name: 'D.Anusai',gender:'Male', proffesion:'Javascripter',
        company:'Cognizant India, Cognizant Technology Solutions',  address:'Hyderabad',
        Image:'../assets/anusai.JPG'
    },
        {  
             name: 'K.Ruthika',gender:'Female', proffesion:'Webdeveloper',
             company:'Cognizant India, Cognizant Technology Solutions',  address:'Hyderabad',
             Image:'../assets/ruthika.png'
            },  
            {  
                name: 'P.Rudrashiva',gender:'Male', proffesion:'Backend developer',
                company:'Kofax',  address:'Hyderabad',
                Image:'../assets/rudrashiva.png'
           }, 
           {  
               name: 'L.Muralikrishna',gender:'Male', proffesion:'Frontend and Backend',
           company:'Infosys',  address:'Hyderabad',
           Image:'../assets/murali.png'
       },
           {  
               name: 'A.Sandeep',gender:'Male', proffesion:'Javascripter',
           company:'Wipro',  address:'Hyderabad',
           Image:'../assets/sanju.jpg'
       },
           {  
                name: 'Ch.Vinitha',gender:'Female', proffesion:'Webdeveloper',
                company:'Tata Consultancy Service',  address:'Hyderabad',
                Image:'../assets/devil.jpg'
               },  
    
    ];  
    
    }