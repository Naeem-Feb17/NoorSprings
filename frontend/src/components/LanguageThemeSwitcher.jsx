import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export default function LanguageThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "hi", name: "Hindi", native: "हिंदी" },
    { code: "te", name: "Telugu", native: "తెలుగు" },
  ];

  return (
    <div className="flex items-center space-x-2">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-steel-100 dark:hover:bg-steel-800 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon size={20} className="text-steel-700 dark:text-steel-300" />
        ) : (
          <Sun size={20} className="text-steel-300" />
        )}
      </button>

      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setShowLangMenu(!showLangMenu)}
          className="flex items-center space-x-1 p-2 rounded-lg hover:bg-steel-100 dark:hover:bg-steel-800 transition-colors"
          aria-label="Select language"
        >
          <Languages size={20} className="text-steel-700 dark:text-steel-300" />
          <span className="text-sm font-medium text-steel-700 dark:text-steel-300 uppercase">
            {language}
          </span>
        </button>

        {showLangMenu && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowLangMenu(false)}
            />
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-steel-800 rounded-lg shadow-lg border border-steel-200 dark:border-steel-700 z-20">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setShowLangMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-steel-50 dark:hover:bg-steel-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    language === lang.code
                      ? "bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400"
                      : "text-steel-700 dark:text-steel-300"
                  }`}
                >
                  <div className="font-medium">{lang.native}</div>
                  <div className="text-xs text-steel-500 dark:text-steel-400">
                    {lang.name}
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
