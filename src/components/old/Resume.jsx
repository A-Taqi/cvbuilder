import '../styles/Resume.css'

function Resume({info, education, career}) {
    return (
        <>
        <div className="resume-header">
            <div className="name">
                <h1>{info.fullName}</h1>
            </div>
            <div className="contact">
                <label>{info.email}</label>
                <label>{info.phone}</label>
            </div>
        </div>
        <div className="resume-content">
            <div className="resume-section">
                <div className="section-title">
                    <h3>Education</h3>
                </div>
                {education.map((item, index) => (
                    <div className="section-content" key={index}>
                    <div className="section-row">
                        <div className="row-dates">
                            {item.dateFrom} - {item.dateTo}
                        </div>
                        <div className="row-info">
                            <div className="row-info-title">
                                {item.title}
                            </div>
                            <div className="row-info-subtitle">
                                {item.degree}
                            </div>
                            {/* {<div className="row-info-body">
                                Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android
                            </div>} */}
                        </div>
                    </div>
                </div>
                 ))}
                
            </div>
        </div>
        </>
    )
}

export default Resume;