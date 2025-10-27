import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section section--biggerGap">
        <div className="section__grid"><div className="section__title">
            {title}
        </div>
            {extraHeaderContent}
        </div>
        {body}
    </section>
)

export default Section;