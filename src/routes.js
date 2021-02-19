const ROUTE = [
    {
      title : "Home",
      url   : "/",
      api   : "https://raw.githubusercontent.com/akbarnotopb/portofolio/main/Data%20Science/EDA/Covid%20Vaccinations%20EDA%20-%206%20Feb%202021.md",
      subnav : [
  
      ]
    },
    {
      title : "Hackerank",
      url   : "/hackerank",
      api   : "/",
      subnav : [
          {
            title : "Sub judul 1",
            url   : "/sub-judul-1",
            api   : "https://raw.githubusercontent.com/akbarnotopb/portofolio/main/Data%20Science/EDA/Covid%20Vaccinations%20EDA%20-%206%20Feb%202021.md"
          },
          {
            title : "Sub judul 2",
            url   : "/sub-judul-2",
            api   : "/"
          },
          {
            title : "Sub judul 3",
            url   : "/sub-judul-3",
            api   : "/"
          },
      ]
    }
]

const findNavigationFromPath = (path) =>{
  let found = false
  let current_nav = {
    url :"/",
    api :"https://raw.githubusercontent.com/akbarnotopb/portofolio/main/Data%20Science/EDA/Covid%20Vaccinations%20EDA%20-%206%20Feb%202021.md",
    subnav : false,
  }
  for (let i =0 ; i < ROUTE.length ; ++i ){
      if(path.main === ROUTE[i].url){
        if( ROUTE[i].subnav.length === 0  && path.child === null){
          current_nav = {
            url :  ROUTE[i].url,
            api :  ROUTE[i].api,
            subnav : false
          }
          break
        }else{
          for (let j = 0 ; j <  ROUTE[i].subnav.length ; ++j){
            if(ROUTE[i].subnav[j].url === path.child){
              current_nav = {
                url : ROUTE[i].url + ROUTE[i].subnav[j].url,
                api : ROUTE[i].subnav[j].api,
                subnav : true,
              }
              found = true
              break
            }
          }
        }
      }
      if(found){
        break
      }
    }
    return current_nav
}

export { ROUTE, findNavigationFromPath }