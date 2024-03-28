const frm=document.getElementById("frm");
const output=document.getElementsByClassName("output");
const spinner=document.getElementById('loading');
const qrcodeElement=document.getElementById('qrcode');
const btnsave=document.getElementById('btn-save');

function generateQRcode(e){
  console.log(e);
  e.preventDefault();

  const url=document.getElementById('url').value
  const size=document.getElementById('size').value
  const clrdark=document.getElementById('colordark').value
  const clrlight=document.getElementById('colorlight').value
  console.log(url,size,clrdark,clrlight)
  if(url==='')
  {
    alert('please fill the url')
  }
  else{
       spinner.style.display='flex';
  }
  setTimeout(()=>{
    spinner.style.display='none';
    qrcodeElement.innerHTML='';

    const qrcode=new QRCode('qrcode',{
        text: url,
        width: size,
        height: size,
        colordark: clrdark,
        colorlight: clrlight,
        CorrectLevel: QRCode.CorrectLevel.H,
    })
    
  },1000)
 createdownloadlink();
}
frm.addEventListener('submit',generateQRcode);

function createdownloadlink(){
    const imagesrc=qrcodeElement.querySelector('img').src;
    // console.log(imagesrc)
    btnsave.href=imagesrc;

}

btnsave.addEventListener('click',()=>{

    setTimeout(()=>{
       
        btnsave.download='qrcode';
    },50);
   
});


