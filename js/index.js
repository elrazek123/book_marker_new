// // this function is responible fro lod the books from the local storrage
let array_of_books=[];
if(window.localStorage.getItem("books")!=null||window.localStorage.getItem("books")!=undefined)
{


local_load();
for(let i=0;i<JSON.parse(localStorage.getItem("books")).length;i++)
{
    array_of_books.push(JSON.parse(localStorage.getItem("books"))[i]);
}
}
let btn_dubmit=document.querySelector("button");
let reguler_exp1=/^([a-z]|[A-Z]){3,30}(\s)?([a-z]|[A-Z])?/;
let input1=document.querySelector("input");
const regr_url = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?.(net|com)/
let input2=document.querySelector("[type='url']");
let search_nput=document.querySelector("[type='search']");

// valid url
function inputs_check_empty(...input)
{
    let state=true;
for(let i=0;i<input.length;i++)
{
if(input[i].value===""||input.value===null)
{
    state=false;
}
}
if(state===true)
{
    return true;
}
else
{
    return false;
}
}
function make_sure_of_web_name(web_name)
{
  let state=true;
  if(window.localStorage.length>0)
  {
  let ele=JSON.parse(window.localStorage.getItem("books"));

  for(let i=0;i<JSON.parse(window.localStorage.getItem("books")).length;i++)
  {
    if(web_name==ele[i].name)
    {
        state=false
    }
  }
  if(state==false)
  {
return false;
  }
  else{
return true;
  }
}
else{
    return true;  
}
}
function add_element(site_name,url)
{
    let tr=document.createElement("tr");
    tr.classList.add("m-3");
    document.querySelector("tbody").appendChild(tr);
    tr.setAttribute("class","d-flex flex-row flex-nowrap justify-content-between align-items-center align-content-center w-100 m-3");
    for(let i=0;i<4;i++)
    {
        let td=document.createElement("td");
        td.setAttribute("class","d-flex w-25 text-center flex-row flex-nowrap justify-content-center align-items-center align-content-center m-1");
        if(i===0)
        {
            if(window.localStorage.length==0||window.localStorage.length==""||JSON.parse(window.localStorage.getItem("books")).length==0||JSON.parse(window.localStorage.getItem("books")).length==""||JSON.parse(window.localStorage.getItem("books")).length==undefined||JSON.parse(window.localStorage.getItem("books")).length==null)
            {
                let r=document.createTextNode("0");
                td.appendChild(r);
                td.classList.add("sp");
            }
            else{
            let r=document.createTextNode(`${JSON.parse(window.localStorage.getItem("books")).length}`);
            td.appendChild(r);
            td.classList.add("sp");
            }
        }
        if(i===1)
        {
td.appendChild(document.createTextNode(`${site_name}`));
        }

        tr.appendChild(td);
        if(i===2)
        {
           
            let a=document.createElement("a");
            a.setAttribute("href",`${url}`);
            a.setAttribute("target","blank");
            let button=document.createElement("button");
            button.appendChild(document.createTextNode("visit"));
            button.setAttribute("class","text-center text-center text-light  border-0  rounded-2 w-100");
            button.style.backgroundColor="green";
            td.appendChild(a);
            td.setAttribute("class","d-flex flex-row flex-nowrap justify-content-center align-items-center align-content-center text-center w-25  m-1");
            a.appendChild(button);
        }
        if(i===3)
        {
            let btn=document.createElement("button");
            btn.innerHTML="delete";
            btn.setAttribute("class","delete text-center text-center text-light  border-0  rounded-2 w-100 bg-danger");
            td.appendChild(btn);
            td.setAttribute("class","d-flex flex-row flex-nowrap justify-content-center align-items-center align-content-center text-center w-25 m-1");
        }
    }
}

const isValidUrl = urlString=> {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
return urlPattern.test(urlString);
}
function are_sure (...inputs)
{
    let state=true;
    for(let i=0;i<inputs.length;i++)
    {
      if(inputs[i].classList.contains("border-danger"))
      {
             state=false
      }
    }
    if(state==false)
    {
        window.alert(`you must in the site name at least 3 chars<br>
        you must in the url input a valid url `);
        return false;
    }
 else{
    return true
 }
}
function clear_the_inputs(...inputs)
{
    for(let i=0;i<inputs.length;i++)
    {
        inputs[i].value="";
    }
}
function reguler_expression_app(input,regularExprssion)
{
 if(regularExprssion.test(input.value))
 {
  input.setAttribute("class","w-100 border-3  rounded-2 position-relative border-success");
 
 }   
 else{
    input.setAttribute("class","w-100 border-3  rounded-2  position-relative border-danger 0");
   
}
}
function local_load()
{
   let json_trnsform=JSON.parse( window.localStorage.getItem("books"));
   if(window.localStorage.length>0)
   {
for(let i=0;i<json_trnsform.length;i++)
{
     let tr=document.createElement("tr");
     tr.setAttribute("class","d-flex flex-row flex-nowrap justify-content-center align-items-center align-content-center text-center w-100 m-3");
     tr.classList.add("m-3");
    document.querySelector("tbody").appendChild(tr);
    for(let j=0;j<1;j++)
    {
        let td1=document.createElement("td");
        td1.appendChild(document.createTextNode(`${i}`));
        td1.setAttribute("class","d-flex flex-row flex-nowrap justify-content-center align-items-center align-content-center text-center w-25  m-1");
        td1.classList.add("sp");
       document.querySelector("tbody").lastElementChild.appendChild(td1);
       let td2=document.createElement("td");
       td2.appendChild(document.createTextNode(`${json_trnsform[i].name}`));
       document.querySelector("tbody").lastElementChild.appendChild(td2);
       td2.setAttribute("class","d-flex flex-row flex-nowrap justify-content-center align-items-center align-content-center text-center w-25  m-1");
       let td4=document.createElement("td");
        let a=document.createElement("a");
        a.setAttribute("href",`${json_trnsform[i].url}`);
        a.setAttribute("target","blank");
        let button=document.createElement("button");
        button.setAttribute("class","text-center text-center text-light  border-0  rounded-2 w-100");
        button.style.backgroundColor="green";
        button.appendChild(document.createTextNode("visit"));
        td4.appendChild(a);
        td4.setAttribute("class","d-flex flex-row flex-nowrap justify-content-center align-items-center align-content-center text-center w-25  m-1");
        a.appendChild(button);
       document.querySelector("tbody").lastElementChild.appendChild(td4);
       let td5=document.createElement("td");
     
        let btn=document.createElement("button");
        btn.innerHTML="delete";
        btn.setAttribute("class","delete text-center text-center text-light bg-danger border-0  rounded-2 w-100");
        td5.appendChild(btn);
        td5.setAttribute("class","d-flex flex-row flex-nowrap justify-content-center align-items-center align-content-center text-center w-25  m-1");
       document.querySelector("tbody").lastElementChild.appendChild(td5);
    }
}
   }
   else{
       
       
   }
}
function delete_item(btn,the_index_of_element)
{
   btn.parentElement.parentElement.remove();
   let r=array_of_books.splice(the_index_of_element,1);
   window.localStorage.setItem("books",JSON.stringify(array_of_books));

}
function search_by_websites(value)
{
    let a=document.querySelector("tbody").children;

   for(let i=0;i<a.length;i++)
   {
    console.log(i);
    if(a[i].firstElementChild.nextElementSibling.innerHTML.includes(value))
    {
        a[i].style.visibility="visible";
        console.log("yes");
    }
    else{
        a[i].style.visibility="hidden";
        console.log("no");
    }
   }
   if(value=="")
   {
    for(let i=0;i<a.length;i++)
    {
        a[i].style.visibility="visible";
    }
   }
}
input1.onkeyup=function()
{
    reguler_expression_app(input1,reguler_exp1);
}
input2.onkeyup=function()
{
    if(isValidUrl(input2.value))
    {
        input2.setAttribute("class","w-100 border-3  rounded-2  position-relative border-success 0");
    }
    else{
        input2.setAttribute("class","w-100 border-3  rounded-2  position-relative border-danger 0");
    }
}
// lsa feha
btn_dubmit.onclick=function()
{
    if(inputs_check_empty(input1,input2))
    {
    if(are_sure(input1,input2))
    {
console.log("yes");
let element={
    name:input1.value,
    url:input2.value,
}
if(make_sure_of_web_name(element.name))
{
add_element(element.name,element.url);

array_of_books.push(element);
window.localStorage.setItem("books",JSON.stringify(array_of_books));
clear_the_inputs(input1,input2);
window.location.reload();
}
else{
    window.alert("the web name is already exists don't repeat");
}
    }
    else{
     console.log("no");   
    }
}
else{
    window.alert("the inputs is empty");
}
let btn_delet=document.querySelectorAll(".delete");
for(let i=0;i<btn_delet.length;i++)
{
    btn_delet[i].onclick=function()
    {
        let btn=btn_delet[i];
        let index=+btn_delet[i].parentElement.parentElement.firstElementChild.innerHTML;
        delete_item(btn,index);
        let sp=document.querySelectorAll(".sp");
        console.log(sp);
        if(document.querySelector("tbody").childNodes.length>0)
        {
        for(let i=0;i<JSON.parse(window.localStorage.getItem("books")).length;i++)
        {
        
         sp[i].innerHTML=`${i}`;
        }
    }
    }
    }
}
//+btn_delet[0].parentElement.parentElement.firstElementChild.innerHTML;

let btn_delet=document.querySelectorAll(".delete");
for(let i=0;i<btn_delet.length;i++)
{
    btn_delet[i].onclick=function()
    {
        let btn=btn_delet[i];
        let index=+btn_delet[i].parentElement.parentElement.firstElementChild.innerHTML;
        delete_item(btn,index);
        let sp=document.getElementsByClassName("sp");
        console.log(sp);
        if(document.querySelector("tbody").childNodes.length>0)
        {
        for(let i=0;i<JSON.parse(window.localStorage.getItem("books")).length;i++)
        {
         sp[i].innerHTML=`${i}`;
        }
    }
    }
}
 
console.log(document.querySelector("tbody").childNodes.length);
search_nput.onkeyup=function()
{
    search_by_websites(search_nput.value);
}
console.log(search_nput);