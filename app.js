function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

document.getElementById('transaksiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const jasa = document.getElementById('jasaSelect').value;
    const jumlah = document.getElementById('jumlah').value;

    const transaksi = {
        nama: nama,
        alamat: alamat,
        jasa: jasa,
        jumlah: jumlah
    };

    localStorage.setItem('transaksi', JSON.stringify(transaksi));
    tampilkanTransaksi();
});

function tampilkanTransaksi() {
    const dataTransaksi = document.getElementById('dataTransaksi');
    const transaksi = JSON.parse(localStorage.getItem('transaksi'));
    if (transaksi) {
        dataTransaksi.innerHTML = `
            <p>Nama: ${transaksi.nama}</p>
            <p>Alamat: ${transaksi.alamat}</p>
            <p>Jasa: ${transaksi.jasa}</p>
            <p>Jumlah: ${transaksi.jumlah}</p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    tampilkanTransaksi();
    showSection('beranda');
});