import LanguageSwitcher from "./LanguageSwitcher";

const LcHeader = async () => {

    return (
        <div className="h-full flex items-center justify-between">
            <div className="ml-5">
                <h1 className="text-black text-6xl font-bold">Las Castagnères</h1>
                <h2 className="mt-2 text-black text-1m font-bold">FERME EXPÉRIMENTALE PYRÉNÉENNE BASÉE A MONTRÉJEAU</h2>
            </div>

            <div className="mr-5">
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default LcHeader;
