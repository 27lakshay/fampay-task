import DOMPurify from "dompurify";

const FormattedString = ({ data }) => {
    const formatString = () => {
        const elementsToInsert = data.entities.map((entity) => {
            let styles = `
            ${entity.color ? `color: ${entity.color}` : ""};
            ${entity.font_style ? `font-style: ${entity.font_style}` : ""}`;

            let tagType = entity.url ? "a" : "span";

            return `<${tagType} 
            ${tagType === "a" ? `href=${entity.url}` : ""} 
            style="${styles}">
            ${entity.text}
            </${tagType}>`;
        });

        let formattedString = data.text;
        for (let i = 0; i < elementsToInsert.length; i++) {
            formattedString = formattedString.replace("{}", elementsToInsert[i]);
        }

        return formattedString;
    };
    if (!data.entities.length > 0) return data.text;
    return <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(formatString()) }}></span>;
};

export default FormattedString;
