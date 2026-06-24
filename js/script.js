const comments=[];

function addComment()
{
    const userName=document.getElementById('username').value;

    const userComment=document.getElementById('comment').value;

    if (userName && userComment)
    {
        const comentario={
            user: userName,
            review: userComment
        };

        comments.push(comentario);
        displayComments();

        document.getElementById('username').value="";
        document.getElementById('comment').value="";
    }
}

function displayComments()
{
    const commentList=document.getElementById('comment_list');
    commentList.innerHTML= "";

    comments.forEach(function(comentario) {
        const row=commentList.insertRow();

        const cell1=row.insertCell(0);
        cell1.textContent=comentario.user;

        const cell2=row.insertCell(1);
        cell2.textContent=comentario.review;
    });
}

const commentForm = document.getElementById('comment_form');

commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addComment();
});