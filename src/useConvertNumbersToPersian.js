import { useEffect } from "react";

const useConvertNumbersToPersian = () => {
  useEffect(() => {
    const persianNumbers = {
      0: "۰",
      1: "۱",
      2: "۲",
      3: "۳",
      4: "۴",
      5: "۵",
      6: "۶",
      7: "۷",
      8: "۸",
      9: "۹",
    };

    function traverse(el) {
      if (el.nodeType === 3) {
        const text = el.textContent;
        const newText = text.replace(/[0-9]/g, (match) => persianNumbers[match]);
        if (newText !== text) {
          el.textContent = newText;
        }
      }
      for (let i = 0; i < el.childNodes.length; i++) {
        traverse(el.childNodes[i]);
      }
    }

    traverse(document.body);
  });
};

export default useConvertNumbersToPersian;