### ChatGPT 

Projeyi yaparken bir konuda takıldım ve ChatGPT'den yardım almak istedim.Custom-packet sayfasındaki sliderlar arasında geçiş yaparken diğer sliderın değeri sıfırlanıyordu\
ve paket ekranına yansımıyordu.Bu yüzden ChatGPT'ye şöyle bir soru sordum.

```
Bir web sitesi yapıyorum ve bu web sitesinde sipariş oluşturmak için Material UI kütüphanesinin Slider Componentini kullanıyorum.\
3 farklı ürünüm var ve bunlar farklı React componentlerinde ben ilk ürünü seçip ikinci ürünümü seçmeye gidince ilk ürünüm kayboluyor.\
Bunu nasıl engellerim ?
```

ChatGPT şöyle bir cevap verdi.

```
Bu sorunu çözmek için Slider Componenti'nin kullanımını gözden geçirmeniz gerekiyor. Material UI Slider Componenti, bir kullanıcının bir değer seçmesine olanak tanıyan bir kontrol elemanıdır. Slider, belirli bir aralıktaki değerleri ayarlamak için kullanılır. Slider'ın olayları aracılığıyla, bir değer seçildiğinde çağrılacak bir işlev tanımlayabilirsiniz.

Bu durumda, ürünlerinizin değerlerini Slider Componenti'ne bağlı React state içinde tutabilirsiniz. Slider'ın değeri değiştiğinde, state'deki değerleri güncelleyerek, seçili olan ürünleri takip edebilirsiniz. Örneğin, ürünlerin değerlerini bir obje olarak state içinde tutabilirsiniz:
```
```
const [selectedProducts, setSelectedProducts] = useState({
  product1: 0,
  product2: 0,
  product3: 0
});
```
```
Slider'ın değeri değiştiğinde, ilgili ürünün değerini güncelleyebilirsiniz:
```
```
<Slider
  value={selectedProducts.product1}
  onChange={(event, value) => setSelectedProducts({...selectedProducts, product1: value})}
/>
```
