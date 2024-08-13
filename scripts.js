// Script untuk membuat navbar tetap berada di atas saat scroll
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

    document.getElementById('seeMoreBtn').addEventListener('click', function() {
        // Dapatkan semua elemen dengan kelas 'hidden'
        var hiddenProducts = document.querySelectorAll('.product-card.hidden');
        
        // Loop melalui setiap produk tersembunyi dan hapus kelas 'hidden'
        hiddenProducts.forEach(function(product) {
            product.classList.remove('hidden');
        });
        
        // Sembunyikan tombol 'Lihat Selengkapnya' setelah semua produk terlihat
        this.style.display = 'none';
    });


    document.addEventListener('DOMContentLoaded', function() {
        const products = document.querySelectorAll('.product-card');
        const productsPerPage = 5;
        const paginationContainer = document.querySelector('.pagination');
        let currentPage = 1;
    
        function showPage(page) {
            const start = (page - 1) * productsPerPage;
            const end = start + productsPerPage;
    
            products.forEach((product, index) => {
                if (index >= start && index < end) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
    
        function createPagination(totalProducts, productsPerPage) {
            const pageCount = Math.ceil(totalProducts / productsPerPage);
            paginationContainer.innerHTML = ''; // Bersihkan pagination sebelumnya
    
            if (pageCount <= 1) return; // Tidak perlu pagination jika hanya ada 1 halaman
    
            // Tambahkan ikon navigasi "Previous" jika bukan halaman pertama
            if (currentPage > 1) {
                const prevLink = document.createElement('a');
                prevLink.textContent = '<';
                prevLink.href = '#';
                prevLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    currentPage--;
                    showPage(currentPage);
                    createPagination(totalProducts, productsPerPage);
                });
                paginationContainer.appendChild(prevLink);
            }
    
            // Tambahkan ikon "..." sebelum nomor halaman pertama jika ada lebih dari 3 halaman sebelumnya
            if (currentPage > 3) {
                const dots = document.createElement('span');
                dots.textContent = '...';
                dots.classList.add('dots');
                paginationContainer.appendChild(dots);
            }
    
            // Tambahkan 3 nomor halaman yang relevan
            for (let i = Math.max(1, currentPage - 1); i <= Math.min(pageCount, currentPage + 1); i++) {
                const pageLink = document.createElement('a');
                pageLink.textContent = i;
                pageLink.href = '#';
                pageLink.classList.toggle('active', i === currentPage);
                pageLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    currentPage = i;
                    showPage(currentPage);
                    createPagination(totalProducts, productsPerPage);
                });
                paginationContainer.appendChild(pageLink);
            }
    
            // Tambahkan ikon "..." setelah nomor halaman terakhir jika ada lebih dari 3 halaman selanjutnya
            if (currentPage < pageCount - 2) {
                const dots = document.createElement('span');
                dots.textContent = '...';
                dots.classList.add('dots');
                paginationContainer.appendChild(dots);
            }
    
            // Tambahkan ikon navigasi "Next" jika bukan halaman terakhir
            if (currentPage < pageCount) {
                const nextLink = document.createElement('a');
                nextLink.textContent = '>';
                nextLink.href = '#';
                nextLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    currentPage++;
                    showPage(currentPage);
                    createPagination(totalProducts, productsPerPage);
                });
                paginationContainer.appendChild(nextLink);
            }
        }
    
        // Inisialisasi halaman pertama dan pagination
        showPage(currentPage);
        createPagination(products.length, productsPerPage);
    });
    
    

    function performSearch(event) {
        event.preventDefault(); // Mencegah halaman di-refresh pada submit form
        const query = document.getElementById('search').value.trim();
        
        if (query !== '') {
            // Ganti URL dengan endpoint pencarian yang benar pada aplikasi Anda
            const searchUrl = `/search?query=${encodeURIComponent(query)}`;
    
            // Lakukan pengalihan ke halaman hasil pencarian
            window.location.href = searchUrl;
        } else {
            alert('Silakan masukkan kata kunci pencarian.');
        }
    }

    


    function toggleContactSection() {
        var contactSection = document.getElementById('contact');
        var toggleButton = document.querySelector('.toggle-btn');

        if (contactSection.style.display === 'none' || contactSection.style.display === '') {
            contactSection.style.display = 'block';
            toggleButton.classList.remove('arrow-down');
            toggleButton.classList.add('arrow-up');
        } else {
            contactSection.style.display = 'none';
            toggleButton.classList.remove('arrow-up');
            toggleButton.classList.add('arrow-down');
        }
    }

    function prepareWhatsAppMessage() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var whatsappText = "Nama: " + name + "%0AEmail: " + email + "%0APesan: " + message;
        
        document.getElementById('whatsapp-text').value = whatsappText;
        return true;
    }



    document.addEventListener('DOMContentLoaded', function() {
        const products = document.querySelectorAll('.product-card');
        const modal = document.getElementById('productModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalImage = document.getElementById('modalImage');
        const modalButton = document.getElementById('modalButton');
        const closeBtn = document.querySelector('.close');
        const prevIcon = document.querySelector('.prev-icon');
        const nextIcon = document.querySelector('.next-icon');
        const body = document.body;
    
        // Data dummy untuk penjelasan produk (ini bisa digantikan dengan data dinamis)
        const productDetails = {
            "Product 1": {
                description: "Product 1 adalah pilihan ideal bagi Anda yang mencari kombinasi antara kenyamanan dan gaya. Dengan bahan berkualitas tinggi dan desain yang elegan.",
                fullDescription: "Product 1 adalah pilihan ideal bagi Anda yang mencari kombinasi antara kenyamanan dan gaya. Dengan bahan berkualitas tinggi dan desain yang elegan, produk ini menawarkan fleksibilitas dan daya tahan yang luar biasa. Cocok untuk berbagai kesempatan, dari acara formal hingga penggunaan sehari-hari.",
                images: [
                    "src/images/d8a42317e46be9bebfd0f74c0b3039e5.jpg",
                    "src/images/OIP (1).jpg",
                    "src/images/OIP (2).jpg"
                ]
            },
            "Product 2": {
                description: "Product 2 mengutamakan inovasi dan fungsi. Didesain dengan teknologi terbaru, produk ini memberikan performa optimal dan kenyamanan ekstra. Fitur-fitur canggihnya memastikan Anda mendapatkan hasil terbaik dalam setiap penggunaan, menjadikannya pilihan utama bagi mereka yang menghargai efisiensi dan kualitas.",
                images: [
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q80.jpg",
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q81.jpg",
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q82.jpg"
                ]
            },
            "Product 3": {
                description: "Product 3 adalah pilihan sempurna untuk Anda yang mengutamakan estetika dan kepraktisan. Dengan desain yang trendi dan bahan premium, produk ini menawarkan sentuhan elegan pada setiap penampilan. Ideal untuk berbagai gaya hidup, dari casual hingga semi-formal, menjadikannya tambahan yang serbaguna dalam koleksi Anda.",
                images: [
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q80.jpg",
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q81.jpg",
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q82.jpg"
                ]
            },
            "Product 4": {
                description: "Penjelasan lengkap mengenai Product 4.",
                images: [
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q80.jpg",
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q81.jpg",
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q82.jpg"
                ]
            },
            "Product 5": {
                description: "Penjelasan lengkap mengenai Product 5.",
                images: [
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q80.jpg",
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q81.jpg",
                    "src/images/Sbf84980341644957a69e1cccabd12a36q.jpg_720x720q82.jpg"
                ]
            }
        };

        let currentProductIndex = 0;
        let currentImageIndex = 0;
        const productNames = Object.keys(productDetails);
    
        products.forEach(function(product) {
            product.addEventListener('click', function() {
                const productName = this.querySelector('h3').textContent;
                currentProductIndex = productNames.indexOf(productName);
                currentImageIndex = 0;
                openModal(productName);
            });
        });
    
        // Fungsi untuk membuka modal
function openModal(productName) {
    const details = productDetails[productName];
    
    modalTitle.textContent = productName;
    modalDescription.textContent = details.description;
    modalImage.src = details.images[currentImageIndex];
    modalButton.textContent = "Pesan Sekarang"; // Ganti teks tombol sesuai kebutuhan
    // Mengatur URL WhatsApp dengan pesan
    modalButton.href = `https://wa.me/6285659838977?text=Saya%20tertarik%20dengan%20${encodeURIComponent(productName)}`;

    modal.classList.add('show');
    modal.querySelector('.modal-content').classList.add('show');
    modal.querySelector('.modal-content').classList.remove('hide');
    body.classList.add('modal-open');
}

    
        // Fungsi untuk menutup modal
        function closeModal() {
            modal.querySelector('.modal-content').classList.add('hide');
            modal.querySelector('.modal-content').classList.remove('show');
            setTimeout(function() { // Wait for animation to finish
                modal.classList.remove('show');
                body.classList.remove('modal-open');
            }, 500); // Match the duration of the CSS transition
        }
    
        // Event listener untuk tombol close
        closeBtn.addEventListener('click', function() {
            closeModal();
        });
    
        // Event listener untuk klik di luar modal
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                closeModal();
            }
        });
    
        // Event listener untuk ikon next
        nextIcon.addEventListener('click', function() {
            const productName = productNames[currentProductIndex];
            const details = productDetails[productName];
            currentImageIndex = (currentImageIndex + 1) % details.images.length;
            modalImage.src = details.images[currentImageIndex];
        });
    
        // Event listener untuk ikon prev
        prevIcon.addEventListener('click', function() {
            const productName = productNames[currentProductIndex];
            const details = productDetails[productName];
            currentImageIndex = (currentImageIndex - 1 + details.images.length) % details.images.length;
            modalImage.src = details.images[currentImageIndex];
        });
    });
     
    


    


// Script untuk toggle menu di mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

closeBtn.addEventListener('click', function() {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
});

// Script untuk close menu ketika klik di luar
window.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});




function prepareWhatsAppMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Halo! Saya ${name}. Email saya: ${email}. Pesan: ${message}`;
    document.getElementById('whatsapp-text').value = whatsappMessage;

    return true;
}
