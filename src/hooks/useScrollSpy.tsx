import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop - offset;
        if (window.scrollY >= top) {
          current = id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
