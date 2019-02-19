document.addEventListener('DOMContentLoaded', function() {
  // Dummy Data
  const notes = [
    {
      sender: 'John Doe',
      date: '(2-8-19 12:31 PM)',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,excepturi ex. Odit itaque neque velit, mollitia ab, quam dicta asperiores laborum porro, libero vitae commodi inventore in quisquam? Qui, necessitatibus?'
    },
    {
      sender: 'Jane Doe',
      date: '(2-8-19 12:31 PM)',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,excepturi ex. Odit itaque neque velit, mollitia ab, quam dicta asperiores laborum porro, libero vitae commodi inventore in quisquam? Qui, necessitatibus?'
    },
    {
      sender: 'John Doe',
      date: '(2-8-19 12:31 PM)',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,excepturi ex. Odit itaque neque velit, mollitia ab, quam dicta asperiores laborum porro, libero vitae commodi inventore in quisquam? Qui, necessitatibus?'
    },
    {
      sender: 'Jane Doe',
      date: '(2-8-19 12:31 PM)',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,excepturi ex. Odit itaque neque velit, mollitia ab, quam dicta asperiores laborum porro, libero vitae commodi inventore in quisquam? Qui, necessitatibus?'
    },
    {
      sender: 'John Doe',
      date: '(2-8-19 12:31 PM)',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,excepturi ex. Odit itaque neque velit, mollitia ab, quam dicta asperiores laborum porro, libero vitae commodi inventore in quisquam? Qui, necessitatibus?'
    },
    {
      sender: 'Jane Doe',
      date: '(2-8-19 12:31 PM)',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,excepturi ex. Odit itaque neque velit, mollitia ab, quam dicta asperiores laborum porro, libero vitae commodi inventore in quisquam? Qui, necessitatibus?'
    }
  ]
  // Get the notes container
  const notesElement = document.querySelector('.notes')

  // Generating note content
  function generateNoteContent(content, sender, date) {
    return `<div class="note">
    <p class="note-content">
      ${content}
    </p>
    <div class="sender">
      <p class="name">${sender}</p>
      ${date}
    </div>
  </div>`
  }

  // Loop through notes and append them to the DOM
  notes.forEach(
    ({ content, sender, date }) =>
      (notesElement.innerHTML += generateNoteContent(content, sender, date))
  )

  // Set the default scroll to the bottom to show the most recent note
  notesElement.scrollTop = notesElement.scrollHeight
})
