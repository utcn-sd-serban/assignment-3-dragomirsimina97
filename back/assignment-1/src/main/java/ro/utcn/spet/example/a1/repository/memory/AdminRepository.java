package ro.utcn.spet.example.a1.repository.memory;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.utcn.spet.example.a1.entity.Admin;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
        Optional<Admin> findByName(String name);
}
