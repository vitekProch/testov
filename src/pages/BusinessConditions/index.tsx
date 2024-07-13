import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { type CustomRoute, ROUTES } from '@/routes';

type Props = {
  route: CustomRoute;
};

export const BusinessConditions: FC<Props> = ({ route: { name: pageName } }) => {
  useDocumentTitle(pageName);

  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Obchodní podmínky</h1>
      <div className="space-y-6">
        <article>
          <h4 className="mb-2 text-xl font-semibold">Ceny focení a splatnost:</h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Ceny balíčků najdete v kategorii
              <Link to={`/${ROUTES.PriceList.path}`} className="text-blue-500 hover:underline">
                {ROUTES.PriceList.name}
              </Link>
              .
            </li>
            <li>
              Po objednání termínu je nutné uhradit rezervační zálohu. O její přesné výši vás budu předem informovat.
            </li>
            <li>Jestliže se klient na focení nedostaví, rezervační záloha propadá.</li>
            <li>Každý klient má na jednu zálohu nárok na jeden náhradní termín.</li>
            <li>Splatnost balíčku nastává poté, co si na základě náhledů vyberete fotografie, o které máte zájem.</li>
            <li>Větší zásahy do fotografií dle vašeho přání budou individuálně naceněny.</li>
          </ul>
        </article>

        <article>
          <h4 className="mb-2 text-xl font-semibold">Výběr fotografií:</h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Po focení zasílám neupravené náhledy fotografií online. Počet náhledů se liší a je individuální dle délky
              focení a dalších podmínek během focení.
            </li>
            <li>Na výběr budete mít dostatek času.</li>
            <li>Hned po přijetí výběru od vás se pouštím do úprav.</li>
            <li>U svatebního focení fotografie k úpravě vybírám sama.</li>
          </ul>
        </article>

        <article>
          <h4 className="mb-2 text-xl font-semibold">Termín zhotovení a dodání fotografií:</h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Ateliérové i exteriérové fotografie zpracuji a elektronicky zašlu do 5 pracovních dnů od přijetí vašeho
              výběru.
            </li>
            <li>Svatební zakázka trvá přibližně 2-3 týdny od vašeho svatebního dne.</li>
            <li>Firemní akce se individuálně liší dle počtu fotografií.</li>
            <li>Fotografie pro školky/školy se opět individuálně liší dle počtu tříd apod.</li>
          </ul>
        </article>

        <article>
          <h4 className="mb-2 text-xl font-semibold">Formát a předání fotografií:</h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Upravené a přirozeně retušované fotografie zasílám elektronicky ve formátu JPEG prostřednictvím Úschovny.
            </li>
            <li>
              Svatební fotografie zasílám také elektronicky ve formátu JPEG prostřednictvím Úschovny. Po domluvě je
              možné vytvořit i elektronické album pro hosty.
            </li>
            <li>Neupravené fotografie neposkytuji!</li>
          </ul>
        </article>

        <article>
          <h4 className="mb-2 text-xl font-semibold">Archivace fotografií:</h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Vaše fotografie u mě budou uchovány minimálně po dobu 6 měsíců. I tak doporučuji je po stažení ihned
              zálohovat a uložit na bezpečné místo.
            </li>
          </ul>
        </article>

        <article>
          <h4 className="mb-2 text-xl font-semibold">Dárkové poukazy:</h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Dárkové poukazy lze zakoupit po celý rok k různým příležitostem, jako jsou narozeniny, Vánoce, výročí...
            </li>
            <li>Každý poukaz má platnost 1 rok od zakoupení.</li>
          </ul>
        </article>

        <article>
          <h4 className="mb-2 text-xl font-semibold">Jiná ujednání:</h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Zákazník nabývá k zakoupeným fotografiím vlastnická práva, nikoli práva autorská, která náleží pouze
              fotografovi. Fotografie tudíž nesmí být použity pro jakékoli komerční účely, propagaci či prodej třetí
              straně bez písemného souhlasu autora. Fotografované osoby mohou používat fotografie pro svou nekomerční
              osobní prezentaci.
            </li>
            <li>
              Dle autorského zákona, není bez souhlasu autora dovoleno, hotové fotografie jakkoliv upravovat (např.
              použití barevných filtrů na Instagramu) a zveřejňovat jako dílo autora.
            </li>
            <li>
              Vyhrazuji si právo ke zveřejnění fotografií ve svém portfoliu na sociálních sítích, na svých webových
              stránkách, příp. dalších propagačních materiálech. Pokud si nepřejete, aby vaše fotografie byly
              zveřejněny, je nutné mě o tom předem informovat. Pokud tak neučiníte, má se za to, že s případným
              zveřejněním souhlasíte. Máte samozřejmě právo dodatečně požadovat odstranění fotografií z portfolia.
            </li>
          </ul>
        </article>

        <article>
          <h4 className="mb-2 text-xl font-semibold">Objednávka termínu:</h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Objednat si svůj termín na focení lze zde vyplněním formuláře v kategorii
              <Link to={`/${ROUTES.Contact.path}`} className="text-blue-500 hover:underline">
                {ROUTES.Contact.name}
              </Link>
              . Můžete mě ale také kontaktovat do zprávy na sociálních sítích, jako je
              <a
                className="text-blue-500 hover:underline"
                href="https://www.facebook.com/Fotografieodhanky"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              nebo
              <a
                className="text-blue-500 hover:underline"
                href="https://www.instagram.com/fotografie_od_hanky/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              .
            </li>
            <li>
              Objednávkou termínu vyjadřujete souhlas s těmito obchodními podmínkami a akceptujete můj autorský přístup
              a fotografický styl.
            </li>
            <li>
              V případě nepříznivého počasí či nemoci z vaší nebo mojí strany, je termín přesunut na nejbližší volný
              termín.
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};
