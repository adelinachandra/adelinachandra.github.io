export function BoldText(text, targetText) {
    return text.split(targetText).map((part, index) => (
        <span key={index}>
            {part}
            {index !== text.split(targetText).length - 1 && <strong>{targetText}</strong>}
        </span>
    ));
}