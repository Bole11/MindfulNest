export function FormError({ error }) {
    if (!error) return null;

    return (
        <p className="errors">
            {error}
        </p>
    );
};