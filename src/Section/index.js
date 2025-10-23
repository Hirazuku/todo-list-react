import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="list__field list__field--biggerGap">
        <h2>
            {title}
        </h2>
        {extraHeaderContent}
        {body}
    </section>
)

export default Section;