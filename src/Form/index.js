import "./style.css";

const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Wysłano imię: `);
    };

const Form = () => (
    <form onSubmit={onFormSubmit}>
        <input className="form__field" placeholder="Co jest do kupienia?" />
        <button className="button">Dodaj do listy</button>

    </form>
)

export default Form;