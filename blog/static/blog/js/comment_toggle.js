console.log('comment_toggle.js loaded - version 2');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    
    // Verify the script is running
    console.log('Script is running');
    
    // Find all toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle-toxic-comment');
    console.log(`Found ${toggleButtons.length} toggle buttons`);
    
    if (toggleButtons.length === 0) {
        console.warn('No toggle buttons found');
        return;
    }

    // Add event listeners to each button
    toggleButtons.forEach((button, index) => {
        console.log(`Setting up listener for button ${index + 1}`);
        
        // Verify button attributes
        console.log('Button attributes:', {
            class: button.className,
            id: button.id,
            'data-comment-id': button.getAttribute('data-comment-id')
        });

        button.addEventListener('click', function(e) {
            console.log(`Button ${index + 1} clicked`);
            
            // Verify event target
            console.log('Event target:', e.target);
            
            e.preventDefault();
            e.stopPropagation();
            
            const commentId = this.getAttribute('data-comment-id');
            console.log(`Comment ID: ${commentId}`);
            if (!commentId) {
                console.error('No comment ID found on button');
                return;
            }

            const commentText = document.querySelector(`.toxic-comment[data-comment-id="${commentId}"]`);
            if (!commentText) {
                console.error(`Could not find comment text element for ID: ${commentId}`);
                return;
            }

            const currentFilter = window.getComputedStyle(commentText).filter;
            console.log(`Current filter: ${currentFilter}`);
            commentText.style.filter = currentFilter === 'blur(5px)' ? 'none' : 'blur(5px)';
            
            console.log(`Toggled comment ${commentId}. New filter: ${commentText.style.filter}`);
        });
    });
});
