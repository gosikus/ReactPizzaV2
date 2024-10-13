import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => {
return(
  <>
  {window.outerWidth > 730 || window.outerWidth <= 547?<ContentLoader 
    speed={2}
    width={337}
    height={447}
    viewBox="0 0 337 447"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="0" rx="30" ry="30" width="330" height="440" />
  </ContentLoader>: <ContentLoader speed={2}
    width={667}
    height={382}
    viewBox="0 0 667 382"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="0" rx="30" ry="30" width="667" height="382" />
    </ContentLoader>}
  </>
  
)
}
  

export default MyLoader




