import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section section--biggerGap">
        <h2>
            {title}
        </h2>
        {extraHeaderContent}
        {body}
    </section>
)

export default Section;