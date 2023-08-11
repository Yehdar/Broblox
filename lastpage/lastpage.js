function closewindow() {
  let cww = confirm("Are you sure? You might have left a friend inside..."); 
  if(cww== true) { 
      window.close(); 
  }
  else{ 
      alert("Great answer!"); 
  }
}
