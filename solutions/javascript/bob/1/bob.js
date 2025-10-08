//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmed=message.trim();
  if(trimmed===null || trimmed==="" || trimmed==='undefined'){
    return "Fine. Be that way!";
  }else if(trimmed.endsWith("?")){
    if(/[a-zA-Z]/.test(trimmed) && trimmed === trimmed.toUpperCase()){
      return "Calm down, I know what I'm doing!";
    }
    return "Sure." 
  }else if(/[a-zA-Z]/.test(trimmed) && trimmed === trimmed.toUpperCase()){
    return "Whoa, chill out!" ;
  }else{
    return "Whatever.";
  }
};
