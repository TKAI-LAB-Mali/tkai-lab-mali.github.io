# Research

Our mission at the TKAI Lab is to develop stable AI systems by integrating insights from neuroscience, control theory, advanced physics, formal methods, and cognitive science. By combining **theoretical foundations** with **empirical validation**, we aim to pioneer stability-driven methodologies. Our focus is on creating systems that demand minimal supervision, leverage smaller datasets, and remain computationally efficient. Above all, we strive to ensure these systems are both **explainable** and **trustworthy**, paving the way for reliable and transparent AI solutions.

## AI for Science

We are committed to harnessing the power of AI to revolutionize other scientific domains.

<div class="grid cards" markdown>

- **Enzyme-Substrate Affinity Prediction**

    ---

    ![kCat](./assets/images/research/kcat.png)

    === "Overview"
        The interaction between protein (enzyme) and substrate is a complex reaction that depends on the 3D geometry of protein and bond strength at individual sights of protein. We are interested in predicting the binding affinity of enzyme-substrate complexes (Kcat) using protein language models and graph neural networks.

    === "Publications"
        - [Robust prediction of enzyme variant kinetics with RealKcat (2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11844551/pdf/nihpp-2025.02.10.637555v1.pdf)

- **Physics-Informed Neural Networks**

    ---

    ![pc-pinns](./assets/images/research/pc-pinns.png)

    === "Overview"
        Physics-informed neural networks (PINNs)

    === "Publications"
        *Work in progress.*

</div>

## Neuro-Mimetic Approaches

At TKAI Lab, we are inspired by the remarkable efficiency and adaptability of biological systems.

<div class="grid cards" markdown>

- **Scaling Predictive Coding**

    ---

    === "Overview"
        The brain constructs a model of the world and corrects this model by minimising the overall prediction error. This prediction error is hierarchical in nature and hence local. Our goal is to achieve the scalability of the PC algorithm to make it a stronger alternative to backprop.

    === "Publications"
        - [Tight Stability, Convergence, and Robustness Bounds for Predictive Coding Networks (2024)](https://arxiv.org/pdf/2410.04708)
        - [Brain-inspired computational intelligence via predictive coding (2023)](https://arxiv.org/pdf/2308.07870)
        - [Active predictive coding: Brain-inspired reinforcement learning for sparse reward robotic control problems (2023)](https://arxiv.org/pdf/2301.01452)

- **Local Representation Alignment**

    ---

    === "Overview"
        Local Representation Alignment (LRA-E) serves as a biologically motivated alternative that replaces global gradients with local target representations and error matrices. We are exploring ways of using LRA to train Recurrent Neural Networks and Variational Autoencoders.

    === "Publications"
        - [Backpropagation-free deep learning with recursive local representation alignment (2023)](https://arxiv.org/pdf/2206.01820)
        - [Biologically Motivated Algorithms for Propagating Local Target Representations (2019)](https://arxiv.org/pdf/1901.01452)

- **Memory-Augmented Neural Networks**

    ---

    === "Overview"
        Transformers struggle to generalize to strings longer than those seen in training. Our work is focused on developing MANNs that outperform state-of-the-art architectures on formal and general language tasks, whilst maintaining comparable levels of computational complexity.

    === "Publications"
        - [Exploring Learnability in Memory-Augmented Recurrent Neural Networks (2024)](https://arxiv.org/pdf/2410.03154)
        - [Recognizing Long Grammatical Sequences using MANNs (2021)](https://arxiv.org/pdf/2101.05006)

</div>

## Theory

<div class="grid cards" markdown>

- **Surprisal-Rènyi Free Energy**

    ---

    ![SRFE](./assets/images/research/srfe.png)

    === "Overview"
        We propose the Surprisal-Rènyi Free Energy (SRFE) as a risk-sensitive functional that interpolates the forward and reverse KL divergences via a single scalar parameter. SRFE penalizes rare but extreme miscalibration events.

    === "Publications"
        - [Surprisal-Rényi Free Energy (2026)](https://arxiv.org/pdf/2603.03405)

- **Realizable Circuit Complexity**

    ---

    === "Overview"
        Historically, computational complexity ignores the challenge of routing information through physical space and dissipating heat. We reformulate standard circuit complexity research under conservative physical constraints.

    === "Publications"
        - [Realizable Circuit Complexity: Embedding Computation in Space-Time (2025)](https://arxiv.org/pdf/2509.19161)

</div>

## LLMs

<div class="grid cards" markdown>

- **Neuro-Symbolic LMs**

    ---

    ![Local RetoMaton](./assets/images/research/retomaton.png)

    === "Overview"
        We extend the automata-based neuro-symbolic framework RetoMaton by replacing its global datastore with a local, task-adaptive Weighted Finite Automaton (WFA). This provides structured, deterministic retrieval that improves interpretability and robustness.

    === "Publications"
        * [Rethinking Reasoning in LLMs: Neuro-Symbolic Local RetoMaton (2025)](https://openreview.net/pdf?id=ySTqCi3nqi)

- **LLM Generalization & Capacity**

    ---

    === "Overview"
        We explore ways in which we can understand and build closed form solutions for model selection strategies and measure their generalization ability using Minimum Description Length (MDL) and curvature analysis.

    === "Publications"
        - [Curvature-Weighted Capacity Allocation for LLM Optimization (2026)](https://arxiv.org/pdf/2603.00910)
        - [Investigating Symbolic Capabilities of Large Language Models (2024)](https://arxiv.org/pdf/2405.13209)

</div>

## Others

<div class="grid cards" markdown>

- **High Performance Computing**

    ---

    === "Overview"
        We are creating the first parallel implementation of Bounded Multi-source Shortest Path (BMSSP) for execution on GPUs, designed to separate the search into independent sub-problems.

    === "Publications"
        *Work in progress.*

- **Control Systems**

    ---

    ![GD-MRAC](./assets/images/research/gd-mrac.png)

    === "Overview"
        Gradient descent-based MRAC (GD-MRAC) addresses controller order issues by employing a gradient descent-based approach to minimize tracking error. We are extending this to higher-order optimization methods.

    === "Publications"
        *Work in progress.*

</div>
