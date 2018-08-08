export default function toRoman(num) {
    let narr, rarr, result, chk, i;

    narr=new Array("3000","1000","900","500","400","100","90","50","40","10","9","5","4","1");
    rarr=new Array("MMM", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I");
    result = "";
    chk = num;
    
    while (chk > 0){
        for (i=0; i<narr.length; i++){
            if(chk >= narr[i]){
                result += rarr[i];
                chk -= narr[i];
                break;       
            }
        }    
    }

    return result;
}
