       //Book constructor
        function Book(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        }

        //UI constructor
        function UI(){}

        //Add book to List : addBookToList()
        UI.prototype.addBookToList = function(book){
                const list = document.getElementById('book-list');
                //create tr element  
                const row = document.createElement('tr');
            //Insert cols
            row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class="delete">X</a></td>
                    `;
                list.appendChild(row);
        }
        //clearFields()
        UI.prototype.clearFields = function(){
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
        }
        //deleteBook()
        UI.prototype.deleteBook = function(target){
            if(target.className === 'delete'){
                target.parentElement.parentElement.remove();
            }
        }
        //showAlert()
        UI.prototype.showAlert = function(message, classname){
        //create div
        const div= document.createElement('div');
        //Add class to div
        div.className = `alert ${classname}`;
        //Add text
        div.appendChild(document.createTextNode(message));
        // Get parents
        const container = document.querySelector('.container');
        //Get form
        const form = document.querySelector('#book-form');
        // Insert alert
        container.insertBefore(div, form);

        // Timout after 2 secs
        setTimeout(function(){
            document.querySelector('.alert')
            .remove();
        },2000);
        }
        //Add Book Event Listener
        document.getElementById('book-form').addEventListener('submit',function (e) {
            const title = document.getElementById('title').value,
                author = document.getElementById('author').value,
                isbn = document.getElementById('isbn').value;

                //Instanciate Book
                const book = new Book(title, author, isbn);
                //Instanciate Book
                    const ui = new UI();
                //Validation
                if(title === '' || author ==='' || isbn ===''){
                    ui.showAlert('Please fill in all fields','error')
                }
                else{
                    //Add book to list
                    ui.addBookToList(book);
                    ui.showAlert('Book added successfully','success')
                    //clearfields                
                    ui.clearFields();

                }

            e.preventDefault();
        })
        //delete Book Event Listener
        document.getElementById('book-list').addEventListener('click',function(e){
            //Instanciate Book
            const ui = new UI();
            //Delete book
            ui.deleteBook(e.target);
            ui.showAlert('Book deleted','success')
            e.preventDefault();
        })
                   