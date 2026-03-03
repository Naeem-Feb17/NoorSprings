import { Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export default function LanguageThemeSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages = [{ code: "en", name: "English", native: "English" }];

  return (
    <div className="flex items-center space-x-2">
      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setShowLangMenu(!showLangMenu)}
          className="flex items-center space-x-1 p-2 rounded-lg hover:bg-steel-100 transition-colors"
          aria-label="Select language"
        >
          <Languages size={20} className="text-steel-700" />
          <span className="text-sm font-medium text-steel-700 uppercase">
            {language}
          </span>
        </button>

        {showLangMenu && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowLangMenu(false)}
            />
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-steel-200 z-20">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setShowLangMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-steel-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    language === lang.code
                      ? "bg-primary-50 text-primary-600"
                      : "text-steel-700"
                  }`}
                >
                  <div className="font-medium">{lang.native}</div>
                  <div className="text-xs text-steel-500">{lang.name}</div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
