import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description?: string;
};

const SITE_NAME = "Corte Superior de Arbitraje de Huancayo";

export default function PageMeta({
  title,
  description,
}: PageMetaProps) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    if (description) {
      const meta = document.querySelector(
        'meta[name="description"]'
      );

      if (meta) {
        meta.setAttribute("content", description);
      }
    }
  }, [title, description]);

  return null;
}
