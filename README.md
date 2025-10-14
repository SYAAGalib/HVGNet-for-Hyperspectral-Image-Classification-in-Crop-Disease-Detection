
# **HVGNet: Hybrid Vision-Graph Network for Hyperspectral Image Classification in Crop Disease Detection**  

## **About**  
This repository contains the official implementation of the method proposed in the article:  
**"A Novel Hybrid Vision-Graph Network (HVGNet) for Hyperspectral Image Classification in Crop Disease Detection"**  

### **Authors:**  
- Jiangsheng Gui*, Mandol Md Sharif  
- SK. Yeasin Ahsanullah Al Galib — Code & Methodology Author (paid researcher hired by Mandol Md Sharif)  
- **School of Computer Science and Technology, Zhejiang Sci-Tech University, Hangzhou 310018, China**  
- *Correspondence: jsgui@zstu.edu.cn | Tel.: +86-0571-8684-3320  

📌 **Note:** The paper is currently under review. The DOI will be added here once the paper is published.  



## **🌱 Project Overview**  
HVGNet is a **novel hybrid deep learning architecture** integrating:  
- **Vision Transformers (ViT):** Robust spectral-spatial feature extraction  
- **Graph Neural Networks (GNN):** Models non-Euclidean relationships between image regions  
- **K-Nearest Neighbors (KNN):** Enhanced classification  

This powerful combination **improves hyperspectral image classification accuracy**, specifically in **crop disease detection**, contributing to advancements in **agricultural remote sensing** and **precision farming**.  

---

## **🗃️ Repository Structure**  
```
├── HVGNet.py        
├── HVGNet.ipynb 
└── README.md         
```

---

## **🛠️ Requirements**  
### **Software Dependencies**  
- Python 3.8–3.10  
- TensorFlow or PyTorch (depending on implementation)  
- NumPy  
- SciPy  
- Scikit-learn  
- Matplotlib  
- NetworkX  
- OpenCV  
- tqdm  

### **Installation**  
To install dependencies:  
```sh
uv pip install -r requirements.txt  
```
_Recommended: Use 'uv pip' for faster and more reliable dependency management._  

---

## **📂 Dataset**  
This project was trained and tested using publicly available **hyperspectral datasets**.  
Details, links, and preprocessing steps will be provided **once the paper is published**.  

---

## **🚀 Usage**  
To run HVGNet via Python script:  
```sh
python HVGNet.py  
```  
To explore interactively in a Jupyter Notebook:  
- Open `HVGNet.ipynb` in Jupyter or Google Colab for **step-by-step usage and testing**.  

---

## **🔗 External Resources**
- Google Colab notebook: https://colab.research.google.com/drive/1eMvFkT8LE1niZKZAFyVDwdjwJCscsyZ8?usp=sharing
- Kaggle notebook: https://www.kaggle.com/code/syaagalib/hvgnet-for-hyperspectral-image-classification-in
- HTML (GitHub source): https://github.com/SYAAGalib/HVGNet-for-Hyperspectral-Image-Classification-in-Crop-Disease-Detection/blob/main/SensorMDPIformatHVGNetforHyperspectralImageCl.html
- HTML (Rendered preview): https://htmlpreview.github.io/?https://github.com/SYAAGalib/HVGNet-for-Hyperspectral-Image-Classification-in-Crop-Disease-Detection/blob/main/SensorMDPIformatHVGNetforHyperspectralImageCl.html
- Read the paper (hosted): https://github.com/SYAAGalib/HVGNet-for-Hyperspectral-Image-Classification-in-Crop-Disease-Detection/tree/main/docs

---

## **📈 Results**  
Experimental results and **ablation studies** show that HVGNet **outperforms traditional CNN and GCN-based models** in accuracy and robustness.  

### **Comparison of HVGNet vs. Other Models**  

| Metric         | GNN   | PGNN-Net | GATs  | EAGNN | EfficientNetV3 | Swin Transformer | ViT   | **HVGNet** |
|--------------|------|---------|------|------|---------------|----------------|------|------------|
| **Accuracy**  | 0.625 | 0.785   | 0.835 | 0.885 | 0.955         | 0.978          | 0.9735 | **0.9821** |
| **Precision** | 0.6312 | 0.790   | 0.840 | 0.890 | 0.956         | 0.9775         | 0.9741 | **0.9815** |
| **Recall**    | 0.625 | 0.785   | 0.835 | 0.885 | 0.955         | 0.978          | 0.9735 | **0.9821** |
| **F1 Score**  | 0.6228 | 0.782   | 0.832 | 0.883 | 0.9545        | 0.9778         | 0.9734 | **0.9818** |
| **MCC**       | 0.385 | 0.650   | 0.750 | 0.800 | 0.940         | 0.975          | 0.9708 | **0.9802** |

### **Percentage Improvement of HVGNet vs. Other Models**  
#### **Accuracy**  
- **57.14% over GNN**  
- **25.11% over PGNN-Net**  
- **17.62% over GATs**  
- **10.97% over EAGNN**  
- **2.84% over EfficientNetV3**  
- **0.42% over Swin Transformer**  
- **0.88% over ViT**  

#### **F1 Score**  
- **57.66% over GNN**  
- **25.55% over PGNN-Net**  
- **18.01% over GATs**  
- **11.19% over EAGNN**  
- **2.86% over EfficientNetV3**  
- **0.41% over Swin Transformer**  
- **0.86% over ViT**  

#### **MCC**  
- **154.60% over GNN**  
- **50.80% over PGNN-Net**  
- **30.69% over GATs**  
- **22.53% over EAGNN**  
- **4.28% over EfficientNetV3**  
- **0.53% over Swin Transformer**  
- **0.97% over ViT**  

---

## **👨‍💼 Acknowledgments**  
This project was implemented and the paper was drafted by **SK. Yeasin Ahsanullah Al Galib** as a **paid researcher hired by Mandol Md Sharif**. Responsibilities included: designing the research process, writing the core codebase (HVGNet), and preparing the manuscript.  

---

## **📌 Citation**  
If you use this work in your research, please cite:  
_To be updated after paper publication._  

---

## **📬 Contact**  
- **Jiangsheng Gui:** jsgui@zstu.edu.cn  
- **Mandol Md Sharif:** 
- **SK. Yeasin Ahsanullah Al Galib:** syaagalib@nubtkhulna.ac.bd — Dept. of CSE, Northern University of Business and Technology Khulna (NUBTK), Khulna, Bangladesh

---

## **🔗 DOI**  
The DOI will be **updated here after publication**.  

---


