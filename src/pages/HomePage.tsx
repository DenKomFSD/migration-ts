export default function Homepage() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "start",
        color: "#fed403",
        background: "rgba(88, 130, 193, 0.28)",
        backdropFilter: "blur(15px)",
        border: "3px solid rgba(186, 204, 230, 0.49)",
      }}
    >
      <h2>Contact Book Application</h2>
      <p>
        Welcome to the Contact Book application. This app allows you to manage
        all your contacts easily and efficiently.
      </p>

      <h3>About the App</h3>
      <p>
        The Contact Book application helps you keep track of all your important
        contacts in one place. You can add, edit, and delete contacts, as well
        as search for specific contacts.
      </p>

      <h3>About the Developer</h3>
      <p>
        Hi, Im Denys, the developer of this Contact Book application. I am a
        passionate web developer with experience in creating modern web
        applications. Feel free to reach out to me at your.email@example.com.
      </p>

      <h3>Contact Information</h3>
      <p>For support, please contact me at:</p>
      <p>
        Email:{" "}
        <a href="mailto:your.email@example.com" style={{ color: "#fed403" }}>
          your.email@example.com
        </a>
        <br />
        Phone: (123) 456-7890
      </p>
    </div>
  );
}
