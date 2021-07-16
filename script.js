// page load
window.addEventListener('load', function() {
	
	// delay
	setTimeout(AwardImagesLoad, 1150);
	
});

function AwardImagesLoad() {

	var award_images = document.querySelectorAll('.award-image');
	
	// loop award image
	award_images.forEach(function(award_image) {
		var image_url = award_image.getAttribute('data-image-full');
		var content_image = award_image.querySelector('img');
		
		// change content image to load the new image
		content_image.src = image_url;
		
		// new photo loaded
		content_image.addEventListener('load', function() {
			
		// swap out background image with new large image
		award_image.style.backgroundImage = 'url(' + image_url + ')';
			
		// class to remove the blur filter
		award_image.className = award_image.className + ' fully-loaded';
		
		});
		
	

	});
	
}