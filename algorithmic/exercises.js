/**
 * A Rapid Introduction to Molecular Biologyclick to expand
Problem
A string is simply an ordered collection of symbols selected from some alphabet and formed into a word; the length of a string is the number of symbols that it contains.

An example of a length 21 DNA string (whose alphabet contains the symbols 'A', 'C', 'G', and 'T') is "ATGCTTCAGAAAGGTCTTACG."

Given: A DNA string s of length at most 1000 nt.

Return: Four integers (separated by spaces) counting the respective number of times that the symbols 'A', 'C', 'G', and 'T' occur in s.

Sample Dataset
AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC
Sample Output
20 12 17 21
 */

/**
 * 1. Repetir la cadena "ATGCTTCAGAAAGGTCTTACG" a 1000 caracteres
 * 2. Contar la cantidad de "A", "C", "G", "T"
 */

let dna = "GTAGTATATCCACATACGAATTTATGGACGCTATCGCGACGCTCTGAACGCGGATTCCGGCAAGCCATGCAGTGTCTACTTACACCCGACGTCCACTCCGCCGGATACATGAGACATATCCCGACAGCTACACGATACTCTATACCTGATCGTACTGTTCTAGCGTACAATACGCGTGTCGCCGGCGGTATCTAAGCTTATAAGTTTCCGCCCTGCGGTTGCGATATTCCGTGTGACGGGCGGCAAATACGGGCCGGGGCACTGTAAGACTCGGAGGGTAAACAGTGGTACAGTGTTGATTATCCGAAACCGCCGGGGAGAGGTGTCGATGACGCTGCAACCTGTACCGCAGTTAGGGGCCGGGATGATGTGGTCGTGCACGCCTTAATCTCCGACTAACTGCAGTTCATAGAGCTTTGATTACATTTCCCAGAGGAATGGATACCTAGTCTTAAAGACAGCACGCTACGCACCAAAATCAGCACCAAACGCAAGCCTCGTGTTCAGACAACTTATTCGCCGTGAAGCTAAGTTTAAGAGGACTCGGATACTATGGAAAATCCTTCTTACAGCAGTGCCATTCCAGTTCGTACTTGTCAGCGAGGCGTTCAGCAATTGGCACCGCAATCATGGGGCACCACGTCATCGTAACTTGTTGGGACACAGTCACGCGGGGTCGTAGTTCTACCGATGGTTAATGCCAGTACCTCAGACGGTCTACACCCTTCGCCCCGGAGAGCGGATCAATGCATCTAGGTAGGTATTCTGCATCCCCCAAGCCTGCGTAGGAACAGATGGATCAGTCCGCCCTACTATGCGTTTAGTGAAGGACGAGGCATTAATACTAGTCCCGTGCGGCCCTGATGACCTGTCTTACGCGATGTACGCCTGACGTCGTGCATTGAATGTTTCATCTTAGGGTCGTAT";
let resultA = 0
let resultC =0;
let resultG = 0;
let resultT = 0;

function dnaChart(dna) {
    
    for (let i = 0; i < dna.length; i++) {
    
        if(dna.charAt(i) === "A") {
            resultA += 1;
        }
        if(dna.charAt(i) === "C") {
            resultC += 1;
        }
        if (dna.charAt(i) === "G") {
            resultG += 1;
        }
        if(dna.charAt(i) === "T") {
            resultT += 1;
        }
     }
    
     return resultA + " " + resultC + " " + resultG + " " + resultT;
}

console.log(dnaChart(dna));

/*
* The Second Nucleic Acidclick to expand
Problem
An RNA string is a string formed from the alphabet containing 'A', 'C', 'G', and 'U'.

Given a DNA string t corresponding to a coding strand, its transcribed RNA string u is formed by replacing all occurrences of 'T' in t with 'U' in u.

Given: A DNA string t having length at most 1000 nt.

Return: The transcribed RNA string of t.

Sample Dataset
GATGGAACTTGACTACGTAAATT
Sample Output
GAUGGAACUUGACUACGUAAAUU  
*/

let data = "GATGGAACTTGACTACGTAAATT";

function transcribedRna(data) {
    for (let i = 0; i < data.length; i++) {
        
        if(data.charAt(i) === "T") {
            data = data.replace("T", "U");
        }
    }
    return data;
}

console.log(transcribedRna(data));
    