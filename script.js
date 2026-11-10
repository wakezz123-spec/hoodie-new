const WHATSAPP_NUMBER = "6285135751969";

const productSelect = document.getElementById("productSelect");
const orderForm = document.getElementById("orderForm");

document.querySelectorAll(".quick-order").forEach((button) => {
  button.addEventListener("click", () => {
    productSelect.value = button.dataset.product;
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    productSelect.focus();
  });
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const product = productSelect.value;
  const size = document.getElementById("sizeSelect").value;
  const color = document.getElementById("colorInput").value.trim();
  const quantity = Number(document.getElementById("quantity").value);
  const address = document.getElementById("address").value.trim();
  const notes = document.getElementById("notes").value.trim();

  if (!name || !product || !size || !color || !address || !Number.isInteger(quantity) || quantity < 1) {
    alert("Mohon lengkapi data pesanan dengan benar.");
    return;
  }

  const selectedOption = productSelect.options[productSelect.selectedIndex];
  const price = Number(selectedOption.dataset.price || 0);
  const total = price * quantity;
  const rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", maximumFractionDigits: 0
  }).format(total);

  const message = [
    "Halo STARBOY! Saya ingin memesan hoodie.",
    "",
    `Nama: ${name}`,
    `Produk: ${product}`,
    `Ukuran: ${size}`,
    `Warna: ${color}`,
    `Jumlah: ${quantity}`,
    `Estimasi total: ${rupiah}`,
    `Alamat pengiriman: ${address}`,
    `Catatan: ${notes || "-"}`,
    "",
    "Mohon konfirmasi stok, ongkir, dan metode pembayaran. Terima kasih!"
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
