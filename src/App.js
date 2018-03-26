import React, { Component } from 'react';
import {
  Deck, Slide, Text, Heading, Image, BlockQuote, Quote, Link, Cite,
  List, ListItem, Appear
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import TweetEmbed from 'react-tweet-embed'
import Social from './Social';

import logo from './assets/lambdabooks-logo.svg';
import denysdovhanGithub from './assets/denysdovhan-github.png';
import chernivtsijsBg from './assets/chernivtsijs-bg.jpg'
import chernivtsijsLogo from './assets/chernivtsijs-logo.png'
import dummy from './assets/dummy.png';
import wonka from './assets/wonka.jpg';
import bookPicture from './assets/book.jpg';
import glassesPicture from './assets/glasses.jpg';
import penPicture from './assets/pen.jpg';
import kyivPicture from './assets/kyiv.jpg';

const colors = {
  primary: "rgba(234, 239, 207, 1)",
  secondary: "rgba(63, 52, 76, 1)",
  tertiary: "rgba(63, 52, 76, 1)",
  quartenary: "rgba(63, 52, 76, 1)",
  subprimary: "rgba(234, 239, 207, 0.5)",
  subsecondary: "rgba(63, 52, 76, 0.5)",
};

const fonts = {
  primary: {
    name: 'Noto Sans',
    googleFont: true,
    styles: ['300', '700']
  },
  secondary: 'Helvetica'
};

const theme = createTheme(colors, fonts);

class App extends Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme} progress="bar">
        <Slide>
          <Heading caps fit textColor="secodary">Чому</Heading>
          <Heading caps fit textColor="secodary">перекладати</Heading>
          <Heading caps fit textColor="secodary"> — це важливо</Heading>
        </Slide>

        <Slide bgColor="white">
          <Link href="https://github.com/denysdovhan" target="_blank">
            <Image src={denysdovhanGithub} width="100%" margin="-4rem auto 0" />
          </Link>
        </Slide>

        <Slide bgImage={chernivtsijsBg} bgDarken={0.5}>
          <Link href="https://chernivtsi.js.org/" target="_blank">
            <Image src={chernivtsijsLogo} width="80%" margin="5rem auto 0" />
            <Text textColor="white" margin="7rem 0 0">
              chernivtsi.js.org
            </Text>
          </Link>
        </Slide>

        <Slide>
          <Image src={logo} width="40%"/>
          <Heading textColor="secondary">LambdaBooks</Heading>
          <Social />
          <Text textSize="1.5rem" textColor="subsecondary" margin="3rem auto 0">
            Натисніть <em>Space</em>, щоб рухатись далі…
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textSize="3.5rem" lineHeight="1.2">
              Книжки з програмування, перекладені українською.<br />
              Якісно.
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={1}>
            Що не так з технічною літературою?
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Англійська домінує</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Це грає на руку розробникам, але створює перешкоди для вступу в професію.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Російськомовний простір</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Україномовна література, або відсутня, або застаріла.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Російськомовний простір</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Мовний вакуум заповнюється калькою, жаргонізмами або запозиченими словами.
          </Text>
        </Slide>

        <Slide bgImage={dummy} bgDarken={0.5}>
          <Text margin="1rem auto" textColor="primary">пріложеніє</Text>
          <Text margin="1rem auto" textColor="primary">перемінні</Text>
          <Text margin="1rem auto" textColor="primary">ссилка</Text>
          <Text margin="1rem auto" textColor="primary">облачний сервіс</Text>
        </Slide>

        <Slide>
          <Heading size={2}>Проблема термінологізації</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            В блогах калька та запозиченнями.<br />
            Академічна література не відповідає потребам сучасності.
          </Text>
        </Slide>

        <Slide bgImage={dummy} bgDarken={0.5}>
          <Text margin="1rem auto" textColor="primary">реліз</Text>
          <Text margin="1rem auto" textColor="primary">кложур</Text>
          <Text margin="1rem auto" textColor="primary">референси</Text>
          <Text margin="1rem auto" textColor="primary">ешкени</Text>
          <Text margin="1rem auto" textColor="primary">пропси</Text>
          <Text margin="1rem auto" textColor="primary">стейт</Text>
        </Slide>

        <Slide>
          <Heading size={2}>Безграмотність</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Незнання орфографії, пунктуації та правил правопису.
          </Text>
        </Slide>

        <Slide bgImage={bookPicture} bgDarken={0.5}>
          <Heading size={1} textColor="primary">
            Чи потрібно перекладати?
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textSize="3.5rem" lineHeight="1.2">
              Скільки мов ти знаєш — стільки разів ти людина
            </Quote>
            <Cite textColor="subprimary">Йоганн Вольфґаґн фон Ґете</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2}>
            Але перекладати все-таки потрібно
          </Heading>
        </Slide>
        <Slide>

          <Heading size={2}>
            Для чого?
          </Heading>
        </Slide>

        <Slide bgImage={wonka} bgDarken={0.5}>
          <Heading size={2} textColor="primary">
            Ну давайте, розкажіть мені про Норвегію
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Школярі та студенти</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Не всім пощастило вивчати англійську.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Складність сприйняття</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Диференціація абеток, складність концентрації над текстом, відтворення образів та аналогій.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Філософія мови</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Вивчає межі залежності пізнавального процесу від мови.
          </Text>
          <Text margin="1rem auto" textColor="subsecondary">
            Мова — ключ до розуміння мислення і знання.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Відсутність пріоритету</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Є люди, для яких вивчення англійської не є приорітетним.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Відсутність можливостей</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Є люди, які не можуть вивчати англійську самостійно фізично<br />
            (або з інших причин).
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Поглиблення розуміння</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Книги рідною мовою знижують поріг входження, поглиблюють розуміння матеріалу.
          </Text>
        </Slide>

        <Slide>
          <Heading size={1}>
            Чому не на російську?
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Мета:</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Розвиток академічної технічної літератури
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textSize="3rem" lineHeight="1.2">
              Стаття 48. Мова викладання у вищих навчальних закладах<br />
              <br />
              1. Мовою викладання у вищих навчальних закладах є державна мова
            </Quote>
            <Cite textColor="subprimary">Закон України про вищу освіту</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={1}>
            Переклад швидко застаріє
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Фундаментальні знання</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Документацією до бібліотеки<br/>
            ≠<br />
            фундаментальна книга
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Мета:</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Зробити фундаментальні знання доступними українською мовою.
          </Text>
        </Slide>

        <Slide bgImage={glassesPicture} bgDarken={0.5}>
          <Heading size={1} textColor="primary">
            ƛ LambdaBooks
          </Heading>
        </Slide>

        <Slide>
          <BlockQuote>
            <TweetEmbed id='826727514416496640' />
          </BlockQuote>
        </Slide>

        <Slide>
          <Link href="https://github.com/LambdaBooks/understandinges6ua" target="_blank">
            <Heading size={2}>Розуміння ES6</Heading>
            <Text margin="1rem auto" textColor="subsecondary">
              LambdaBooks/understandinges6ua
            </Text>
          </Link>
        </Slide>

        <Slide>
          <Heading size={2}>Як ми працюємо</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Якісний переклад настільки, наскільки це можливо зробити з нашими ресурсами.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Типовий робочий процес</Heading>
          <List>
            <Appear>
              <ListItem textSize="2rem">волонтер перекладає оригінальний текст;</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2rem">технічний спеціаліст перевіряє адекватність перекладу;</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2rem">філолог перевіряє текст на помилок;</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2rem">заявлені помилки виправляються;</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2rem">текст публікується на сайті книги та у соцмережах.</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgImage={penPicture} bgDarken={0.6}>
          <Heading size={2} textColor="primary">Рік потому</Heading>
          <Text margin="1rem auto" textColor="subprimary">
            Що ми зробили за рік…
          </Text>
        </Slide>

        <Slide>
          <Link href="https://github.com/LambdaBooks/thelittlebookofruby" target="_blank">
            <Heading size={2}>Маленька книга про Ruby</Heading>
            <Text margin="1rem auto" textColor="subsecondary">
              LambdaBooks/thelittlebookofruby
            </Text>
          </Link>
        </Slide>

        <Slide>
          <Link href="https://github.com/LambdaBooks/clojurescript-unraveled" target="_blank">
            <Heading size={2}>Розплутаний ClojureScript</Heading>
            <Text margin="1rem auto" textColor="subsecondary">
              LambdaBooks/clojurescript-unraveled
            </Text>
          </Link>
        </Slide>

        <Slide>
          <Link href="https://github.com/LambdaBooks/dictionary" target="_blank">
            <Heading size={2}>Словник термінів</Heading>
            <Text margin="1rem auto" textColor="subsecondary">
              LambdaBooks/dictionary
            </Text>
          </Link>
        </Slide>

        <Slide>
          <Link href="https://medium.com/lambdabooks" target="_blank">
            <Heading size={2}>Публікація на Medium</Heading>
            <Text margin="1rem auto" textColor="subsecondary">
              medium.com/lambdabooks
            </Text>
          </Link>
        </Slide>

        <Slide>
          <Link href="http://slack.lambdabooks.com/" target="_blank">
            <Heading size={2}>Спільнота в Slack</Heading>
            <Text margin="1rem auto" textColor="subsecondary">
              slack.lambdabooks.com
            </Text>
          </Link>
        </Slide>

        <Slide bgImage={kyivPicture} bgDarken={0.5}>
          <Heading size={1} textColor="primary">
            Замість висновку
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Всі переклади безкоштовні</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Проект є некомерційним і підтримується волонтерами.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Ми шукаємо волонтерів</Heading>
          <Text margin="1rem auto" textColor="subsecondary">
            Перекладачів, дизайнерів, розробників, SMM-щиків, тощо.
          </Text>
        </Slide>

        <Slide>
          <Image src={logo} width="40%"/>
          <Heading size={2}>Дякую за увагу!</Heading>
          <Social />
          <Text margin="1.5rem auto" textColor="subsecondary">
             Запитання?
          </Text>
        </Slide>
      </Deck>
    );
  }
}

export default App;
