import styles from "./NextButton.module.css";

const NextButton = (props) => {
    return (
        <div className={styles.nextButton}>
            <button variant="contained" onClick={props.onNext} disabled={props.disabled} className={props.className}>
                {props.text}
            </button>
        </div>
    )
}
export default NextButton;