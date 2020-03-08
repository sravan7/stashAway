

export const Filterby=(data,value)=>{
    let newData =[...data];
    const rankKey="Top Ten";
    if(value===rankKey){
        newData = newData.filter(a=>!isNaN(parseInt( a[rankKey].split("#")[0]))) ;
        newData.sort((a,b)=>{
            let aYear=parseInt(a[rankKey].split("#")[0]),aRank=parseInt(a[rankKey].split("#")[1]);
            let bYear=parseInt(b[rankKey].split("#")[0]),bRank=parseInt(b[rankKey].split("#")[1])
            if(aYear<bYear) return 1;
            if(aYear>bYear) return -1;
            if(aYear===bYear){
                if(aRank<bRank) return -1;
                 return 1;
            }
        });
        return newData
    }
    newData.sort(
        (a,b)=>{
          if(a[value]<b[value]) return -1;
          if(a[value]>b[value]) return 1;
          return 0;
        });
    return newData;
}

