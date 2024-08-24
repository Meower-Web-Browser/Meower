<div align="center">
  <img src="https://github.com/JOAO-LEE/google_clone/assets/100000031/66ae2a56-d8b0-48b5-846b-c61fd5af12d4" width="400px"> 
</div>

## Introduction
Since I already had experience with React.Js projects, I decided to get to know one of it's *"meta frameworks"*, and coincidentally, I got a [beginner-friendly course](https://www.udemy.com/course/react-js-tutorial/) on Udemy by [Sahand Gavidel](https://www.sahandghavidel.com/), where he guides through the fundamentals of [Next.js](https://nextjs.org/) with a hands-on approach. The course includes step-by-step instructions for building four clone projects, with one of them replicating the Google interface.

<div align="center">
  <div>
    <img src="https://github.com/JOAO-LEE/google_clone/assets/100000031/8feed7da-b0ee-4a97-ae1b-83526c0dcb28" width="700px" alt="Google main page" title="Google main page" />
  </div>
</div>
<div align="center">
  <details>
    <summary>See the details</summary>
      <div display="flex">
        <img src="https://github.com/JOAO-LEE/google_clone/assets/100000031/a75fcbb9-3fcb-4c56-b58b-d40795ec3b5e" width="375" alt="Google web search loading"  title="Google web search loading"/>
        <img src="https://github.com/JOAO-LEE/google_clone/assets/100000031/06541afc-6e5c-43cd-9e83-0c8c8af2801a" width="375" alt="Google image search loading"  title="Google image search loading"/>
        <img src="https://github.com/JOAO-LEE/google_clone/assets/100000031/066ec785-116b-40c2-91f7-706549f72cc5" width="375" alt="Google web search results"  title="Google web search results"/>
        <img src="https://github.com/JOAO-LEE/google_clone/assets/100000031/0588eda1-5b6f-434c-ba64-bb6186fe3860" width="375" alt="Google image searc results"  title="Google image search results"/>
        <p align="start">⚠ It's important to state that some functionalities such as <em>"Sign in"</em>, <em>"Microphone input"</em> and <em>"Settings"</em> were not implemented for now, since this application focus on its search functionality. However, I intend to implement some other functionalities.</p>
      </div>
  </details>
</div>

## Getting Started
To clone and run this project locally, firstly: 

1. Ensure you have [**Node.js**](https://nodejs.org/en) installed, with a minimum version of `18.x` or a later stable release;
2. <details>
    <summary>Get a free Google Custom Search API key;</summary>
    <p>In order to identify your application client, you will:</p>
    <ul>
      <li>
        need an <b><a href="https://developers.google.com/custom-search/v1/using_rest?hl=en">API key</a></b> to receive data. This requires a Google account;
         <figure>
          <img src="https://github.com/JOAO-LEE/google_clone/assets/100000031/8bbf817c-b077-4a0a-9445-7a8e64ce21ef" alt="API key page screenshot" title="API key page screenshot">
          <figcaption>https://developers.google.com/custom-search/v1/using_rest?hl=en</figcaption>
        </figure>
      </li>
      <li>Create an <code>.env</code> file in the root of the project and assign your API key value to the corresponding environment variable;<br>
        You can name it however you would like.<br>
        <pre>
          GOOGLE_API_KEY = # paste your Google Search API key here
        </pre>
      </li>
    </ul>
</details>

3.  <details>
      <summary>Get a Context Key;</summary>
      <p>You will need to set up a <b>Programming Search Engine</b>. This means you will have to: 
      <ul>
        <li>
          <b><a href="https://programmablesearchengine.google.com/controlpanel/create?hl=en">Create a project</a></b> - choose to search the entire web;<br>
        <figure>
         <img src="https://github.com/JOAO-LEE/google_clone/assets/100000031/103f8f8b-8d02-45d8-b229-9a2e60eb7082" alt="Context key page screenshot" title="Context key page screenshot">
            <figcaption>https://programmablesearchengine.google.com/controlpanel/create?hl=en</figcaption>
        </figure>
        </li>
        <li>In your <code>.env</code> file, assign your context key value to the corresponding environment variable;<br>
           You can name it however you would like.<br>
          <pre>
            CONTEXT_KEY = # paste your Context key here
          </pre>
        </li>
      </ul>
</details>

4. <details>
    <summary>Run the application</summary>
    <p>In root folder, run the command:</p>
    <pre>
      npm run dev
      # or
      yarn dev
      # or
      pnpm dev
      # or
      bun run dev
    </pre>
    <p>Open <a href="http://localhost:3000">http://localhost:3000</a> with your browser to see the result.</p>
  </details>
  
 5. <details>
      <summary>Get API key for IP Localization (Optional)</summary>
      <p>This clone gets the user IP address using just like Google and its sets the user's country in the footer. By default, it shows "United States".<br>
      Sahand uses the free package of <b><a href="https://extreme-ip-lookup.com/">eXTReMe</a></b> Geolocation. However, somehow it's not possible to create an account with a Gmail or Hotmail address.<br>
      I could get the same result using <b><a href="https://ipgeolocation.io/">ipgeolocation</a></b>.</p>    
      <ul>
        <li>Create an account;</li>
        <li>Once you've signed up/logged in, click on <b>"Dashboard"</b></li>
        <li>Generate your API Key and copy it</li>
        <li>In your <code>.env</code> file, assign your ipgeolocation API key value to the corresponding environment variable;<br>
           You can still name it however you would like, but since this component is rendered client side, the environment variable requires the <code>NEXT_PUBLIC_</code> prefix.
          <pre>
            NEXT_PUBLIC_IP_API_KEY = # past you ipgeolocation key here
          </pre>
        </li>
      </ul>
  </details> 

## Development
### Stack and Language Decision
Moreover, while Sahand instructs the project using JavaScript, I've chose deliberately to implement it using TypeScript. This decision not only eases the development process with enhanced type safety, but also aligns with the rising trend and widespread adoption of TypeScript in the developer community. \
Also, it's worth noting that this project was built with [**Next.js 14**](https://nextjs.org/blog/next-14), while Sahand utilized its [**earlier version**](https://nextjs.org/blog/next-13) in the course.
### Styles, Icons and Formatting
To style the project, it was employed [**Tailwind CSS**](https://tailwindcss.com/), a CSS framework which provides classes to style HTML elements, contributing to a more efficient development process. \
Additionally, for the integration of icons, [**React Icons**](https://react-icons.github.io/react-icons/) was employed—an extensive library featuring a diverse collection of icons to enhance the overall user experience. \
In order to achieve the boldened search term in each result description, [**html-react-parser**](https://www.npmjs.com/package/html-react-parser) was employed, once Google search API brings a property called `htmlSnippet` for this purpose. 

<details>
  <summary>See the example below</summary>
  <div align="center">
  <img src="https://github.com/JOAO-LEE/google_clone/assets/100000031/c9b31942-fa9d-4030-af9a-9bf35dc186c1" width="100%" alt="Google API result showing htmlSnippet property" title="Google search result showing htmlSnippet property">
  <img src="https://github.com/JOAO-LEE/google_clone/assets/100000031/734880f0-585a-4348-9eae-2e9600c10fb0" width="500px" alt="Search term boldened" title="Search term boldened">
</div>
</details>
