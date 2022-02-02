export function Home(props) {
    return <div>
        <div className='page-body'>
            <h1>ברוכים הבאים</h1>
        </div>
        <div className='flex-row'>
            <img src='./pictures/picture.jpg' height="300px" width="200px" className='image' />
            <img src='./pictures/picture2.jpg' height="300px" width="200px" />
        </div>
        <div className='about-us'>
            <h3>דניאל שיווק מוצרי צנרת פועלת בתחום שירותי האינסטלציה משנת 2000,
                ומספקת שירות בתחום אינסטלציה, פרזול, צבע ועוד.
                מאז ועד היום אנחנו נותנים שרות אמין ומקצועי ללקוחות פרטיים ומוסדות בכל רחבי הארץ.
                אצלינו תוכלו למצוא מוצרים באיכות גבוהה, שרות אדיב, ייעוץ והכוונה כשצריך ויחס חם ואנושי.</h3>
                
      </div>
        <div className= 'our-details'>
        <h1>המוצרים שלנו</h1>
            <img onClick={function(){props.updatePage("product","1")}} src='./pictures/picture3.jpeg' height="300px" width="200px" className='image' />
            <img onClick={function(){props.updatePage("product","2")}} src='./pictures/picture3.jpeg' height="300px" width="200px" className='image' />
            
        </div>
    </div>
}