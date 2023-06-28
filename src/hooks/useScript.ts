import { useEffect } from 'react';

// const useScript = (type:string, id:string, src:string) => {
const useScript = (type:string, id:string, src:string) => {

  useEffect(() => {
    const script = document.createElement('script');

    script.type=type;
    script.id=id;
    script.src = src;
    script.async = false;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [src]);
};

export default useScript;



// export default function useScript( url: string){
//   useEffect(() => {
//     const head = document.querySelector("head");
//     const script = document.createElement("script");

//     script.setAttribute("src", url);
//     head?.appendChild(script);

//     return () => {
//       head?.removeChild(script);
//     };
//   }, [url]);
// };